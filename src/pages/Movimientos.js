import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  increment 
} from 'firebase/firestore'; 

const Movimientos = () => {
  // Estado para guardar la lista de materiales (para el <select>)
  const [materiales, setMateriales] = useState([]);
  
  // Estado para el formulario de uso (Salida)
  const [movimiento, setMovimiento] = useState({
    idMaterial: '', // Guardaremos el ID de Firebase del material seleccionado
    cantidad: 0,
    responsable: '',
  });

  const materialesCollectionRef = collection(db, "Materiales");

  // Hook para cargar los materiales al iniciar la página (como en Inventario.js)
  useEffect(() => {
    const getMateriales = async () => {
      const data = await getDocs(materialesCollectionRef);
      setMateriales(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };
    getMateriales();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setMovimiento({
      ...movimiento,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  // Función de UPDATE: Actualizar el Stock en Firebase
  const registrarSalida = async (e) => {
    e.preventDefault(); 
    
    const { idMaterial, cantidad, responsable } = movimiento;

    if (!idMaterial || cantidad <= 0) {
        alert("Por favor, selecciona un material y la cantidad.");
        return;
    }

    const materialUsado = materiales.find(m => m.id === idMaterial);
    
    if (materialUsado.Stock < cantidad) {
        alert(`Error: No hay suficiente stock. Solo quedan ${materialUsado.Stock} unidades.`);
        return;
    }

    try {
      // 1. 🚨 REQUISITO BÁSICO: Mostrar información por consola
      console.log("--- REGISTRO DE SALIDA DE STOCK ---");
      console.log("Material ID:", idMaterial);
      console.log("Material Nombre:", materialUsado.Nombre);
      console.log("Cantidad Usada:", cantidad);
      console.log("Responsable:", responsable);
      console.log("----------------------------------");

      // 2. 🚨 UPDATE: Referencia al documento específico a actualizar
      const materialDoc = doc(db, "Materiales", idMaterial);

      // 3. 🚨 UPDATE: Usar 'increment' con un valor negativo para restar al stock
      await updateDoc(materialDoc, {
        Stock: increment(-cantidad) // Restamos la cantidad al campo 'Stock'
      });

      alert(`Se registraron ${cantidad} unidades de ${materialUsado.Nombre} como USADAS.`);
      
      // Opcional: Recargar la página o actualizar el estado de materiales para ver el cambio
      window.location.reload(); 

    } catch (error) {
      console.error("Error al registrar la salida:", error);
      alert('Error al actualizar el stock. Revisa la consola para detalles.');
    }
  };

  return (
    <div className="container">
      <h1>Registro de Uso (Salida) de Materiales</h1>
      <p>Registra la cantidad de material que se ha utilizado en una faena.</p>

      <form onSubmit={registrarSalida}>
        
        {/* Campo 1: Material (SELECT con IDs de Firebase) */}
        <div>
          <label htmlFor="idMaterial">Material Utilizado:</label>
          <select
            id="idMaterial"
            name="idMaterial"
            value={movimiento.idMaterial}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona un material</option>
            {materiales.map(material => (
              // El valor (value) de la opción es el ID de Firebase
              <option key={material.id} value={material.id}>
                {material.Nombre} (Stock: {material.Stock})
              </option>
            ))}
          </select>
        </div>

        {/* Campo 2: Cantidad */}
        <div>
          <label htmlFor="cantidad">Cantidad a Usar:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={movimiento.cantidad}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Campo 3: Responsable */}
        <div>
          <label htmlFor="responsable">Responsable de la Faena:</label>
          <input
            type="text"
            id="responsable"
            name="responsable"
            value={movimiento.responsable}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Registrar Uso y Actualizar Stock</button>
      </form>
    </div>
  );
};

export default Movimientos;