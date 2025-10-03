import React, { useState } from 'react';
import { db } from '../firebase-config'; // Importar la base de datos
import { collection, addDoc } from 'firebase/firestore'; // Función para añadir documentos
import { useNavigate } from 'react-router-dom'; // Hook para redirigir al usuario

const NuevoMaterial = () => {
  const [nuevoMaterial, setNuevoMaterial] = useState({
    Nombre: '', // Usamos Mayúscula Inicial para coincidir con la BD
    Stock: 0,
    Unidad: '', 
    Precio: 0,
    Descripcion: '',
  });

  const navigate = useNavigate();
  const materialesCollectionRef = collection(db, "Materiales"); // Referencia a la colección

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Si es un campo de número, convertimos el valor a número
    const finalValue = type === 'number' ? Number(value) : value;

    setNuevoMaterial({
      ...nuevoMaterial,
      [name]: finalValue,
    });
  };

  const crearMaterial = async (e) => {
    e.preventDefault();
    try {
      // 🚨 CREATE: Añadir el nuevo documento a Firestore
      await addDoc(materialesCollectionRef, { 
        ...nuevoMaterial,
        // Aseguramos que el stock y precio sean números antes de guardar
        Stock: Number(nuevoMaterial.Stock), 
        Precio: Number(nuevoMaterial.Precio),
      });

      alert('¡Material agregado exitosamente!');
      navigate('/inventario'); // Redirigir al inventario para verlo

    } catch (error) {
      console.error("Error al crear el material:", error);
      alert('Error al guardar el material.');
    }
  };

  return (
    <div className="container">
      <h1>Dar de Alta Nuevo Material</h1>
      <p>Utiliza este formulario para añadir un nuevo tipo de material al inventario.</p>

      <form onSubmit={crearMaterial}>
        
        {/* Nombre */}
        <div>
          <label htmlFor="Nombre">Nombre del Material:</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            value={nuevoMaterial.Nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Caño PVC 160 mm"
          />
        </div>

        {/* Stock Inicial */}
        <div>
          <label htmlFor="Stock">Stock Inicial:</label>
          <input
            type="number"
            id="Stock"
            name="Stock"
            value={nuevoMaterial.Stock}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        {/* Unidad */}
        <div>
          <label htmlFor="Unidad">Unidad de Medida:</label>
          <input
            type="text"
            id="Unidad"
            name="Unidad"
            value={nuevoMaterial.Unidad}
            onChange={handleChange}
            placeholder="Ej: Metros, Unidades, Piezas"
          />
        </div>

        {/* Precio */}
        <div>
          <label htmlFor="Precio">Precio Unitario:</label>
          <input
            type="number"
            id="Precio"
            name="Precio"
            value={nuevoMaterial.Precio}
            onChange={handleChange}
            min="0"
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="Descripcion">Descripción:</label>
          <textarea
            id="Descripcion"
            name="Descripcion"
            value={nuevoMaterial.Descripcion}
            onChange={handleChange}
            placeholder="Detalles sobre el uso o especificaciones técnicas."
          ></textarea>
        </div>

        <button type="submit">Crear Material</button>
      </form>
    </div>
  );
};

export default NuevoMaterial;