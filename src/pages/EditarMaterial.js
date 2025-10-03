import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore'; 

const EditarMaterial = () => {
  // Obtener el 'id' del material desde la URL (ej: /editar/qwerty12345)
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [materialData, setMaterialData] = useState({
    Nombre: '',
    Stock: 0,
    Unidad: '', 
    Precio: 0,
    Descripcion: '',
  });

  const [loading, setLoading] = useState(true);

  // 🚨 Función 1: Cargar los datos actuales del material
  useEffect(() => {
    const getMaterial = async () => {
      try {
        const materialDocRef = doc(db, "Materiales", id);
        const materialSnapshot = await getDoc(materialDocRef);
        
        if (materialSnapshot.exists()) {
          // Si el material existe, cargamos sus datos en el estado
          setMaterialData({
            ...materialSnapshot.data(),
            // Aseguramos que Stock y Precio sean números para el formulario
            Stock: Number(materialSnapshot.data().Stock),
            Precio: Number(materialSnapshot.data().Precio),
          });
        } else {
          alert('Material no encontrado.');
          navigate('/inventario');
        }
      } catch (error) {
        console.error("Error al cargar el material:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getMaterial();
    }
  }, [id, navigate]); // Dependencias: se ejecuta si el ID cambia

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? Number(value) : value;

    setMaterialData({
      ...materialData,
      [name]: finalValue,
    });
  };

  // 🚨 Función 2: Guardar los cambios (UPDATE)
  const guardarCambios = async (e) => {
    e.preventDefault();
    try {
      const materialDocRef = doc(db, "Materiales", id);
      
      // Utilizamos updateDoc para sobrescribir solo los campos cambiados
      await updateDoc(materialDocRef, {
        Nombre: materialData.Nombre,
        Unidad: materialData.Unidad,
        Precio: Number(materialData.Precio),
        Descripcion: materialData.Descripcion,
        // No editamos el Stock directamente aquí, para eso está Movimientos.js
      });

      alert('¡Material actualizado exitosamente!');
      navigate('/inventario');

    } catch (error) {
      console.error("Error al guardar cambios:", error);
      alert('Error al actualizar el material.');
    }
  };

  if (loading) {
    return <div className="container"><h1>Cargando...</h1></div>;
  }

  return (
    <div className="container">
      <h1>Editar Material: {materialData.Nombre}</h1>
      <p>Modifica el nombre, descripción, precio o unidad de medida del material.</p>

      <form onSubmit={guardarCambios}>
        
        {/* Campo Nombre */}
        <div>
          <label htmlFor="Nombre">Nombre del Material:</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            value={materialData.Nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Caño PVC 160 mm"
          />
        </div>

        {/* Campo Stock (Solo lectura - no debe editarse aquí) */}
        <div>
          <label>Stock Actual:</label>
          {/* Mostramos el stock actual, pero no permitimos su edición directa */}
          <input type="text" value={materialData.Stock} disabled style={{ backgroundColor: '#f0f0f0' }} />
          <small>El stock se actualiza solo en la página de Movimientos.</small>
        </div>

        {/* Campo Unidad */}
        <div>
          <label htmlFor="Unidad">Unidad de Medida:</label>
          <input
            type="text"
            id="Unidad"
            name="Unidad"
            value={materialData.Unidad}
            onChange={handleChange}
            placeholder="Ej: Metros, Unidades"
          />
        </div>

        {/* Campo Precio */}
        <div>
          <label htmlFor="Precio">Precio Unitario:</label>
          <input
            type="number"
            id="Precio"
            name="Precio"
            value={materialData.Precio}
            onChange={handleChange}
            min="0"
          />
        </div>

        {/* Campo Descripción */}
        <div>
          <label htmlFor="Descripcion">Descripción:</label>
          <textarea
            id="Descripcion"
            name="Descripcion"
            value={materialData.Descripcion}
            onChange={handleChange}
            placeholder="Detalles sobre el uso o especificaciones técnicas."
          ></textarea>
        </div>

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarMaterial;