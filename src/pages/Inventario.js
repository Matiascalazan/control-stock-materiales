import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config'; 
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 

const Inventario = () => {
  const [materiales, setMateriales] = useState([]);
  const materialesCollectionRef = collection(db, "Materiales");
  const navigate = useNavigate();

  // Función para obtener y actualizar la lista de materiales
  const getMateriales = async () => {
    try {
      const data = await getDocs(materialesCollectionRef);
      const listaMateriales = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,    
      }));
      setMateriales(listaMateriales);
    } catch (error) {
      console.error("Error al obtener materiales:", error);
    }
  };

  // 🚨 DELETE: Función para eliminar un material por su ID
  const deleteMaterial = async (id, nombre) => {
    // Confirmación de seguridad
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${nombre}"? Esta acción no se puede deshacer.`)) {
      try {
        const materialDoc = doc(db, "Materiales", id);
        await deleteDoc(materialDoc);
        
        alert(`${nombre} ha sido eliminado con éxito.`);
        
        // Actualizar el estado para que la lista se recargue sin el material eliminado
        getMateriales(); 

      } catch (error) {
        console.error("Error al eliminar el material:", error);
        alert('Error al eliminar el material.');
      }
    }
  };


  // useEffect se usa para cargar los datos la primera vez
  useEffect(() => {
    getMateriales();
  }, []); 

  return (
    <div className="container">
      <h1>Inventario de Materiales</h1>
      {materiales.length === 0 ? (
        <p>Cargando inventario o no hay materiales...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Existencias</th>
              <th>Unidad</th>
              <th>Precio</th>
              <th>Acciones</th> {/* Nueva columna para los botones */}
            </tr>
          </thead>
          <tbody>
            {materiales.map((material) => (
              <tr key={material.id}>
                {/* Usamos las mayúsculas iniciales que ya corregimos */}
                <td>{material.Nombre || 'N/A'}</td>      
                <td>{material.Stock || 'N/A'}</td>       
                <td>{material.Unidad || 'N/A'}</td> 
                <td>${material.Precio ? material.Precio.toFixed(2) : 'N/A'}</td>
                
                {/* Columna de Acciones */}
                <td>
                  {/* Botón de Eliminar (DELETE) */}
                  <button 
                    onClick={() => deleteMaterial(material.id, material.Nombre)}
                    style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Eliminar
                  </button>
                  <button 
                    onClick={() => navigate(`/editar/${material.id}`)} // 🚨 Redirección
                    style={{ backgroundColor: '#ffc107', color: 'black', border: 'none', padding: '5px 10px', cursor: 'pointer', marginRight: '10px' }}
                  >
                   Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Inventario;