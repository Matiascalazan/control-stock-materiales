import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1>Control de Entrada y Salida de Materiales</h1>
      
      <p style={{ fontSize: '1.1em', color: '#555' }}>
        Esta aplicación está diseñada para optimizar la gestión del inventario de materiales utilizados en la red de agua potable, insumos para mantenimiento de la red sanitaria y (EPP) Elementos de proteccion personal de los operarios. Un control preciso es la clave para reducir los tiempos de respuesta en emergencias y asegurar el suministro continuo.
      </p>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #e9ecef' }} />

      <div style={{ marginBottom: '25px' }}>
        <h2>Visión General</h2>
        <p>
          El depósito constituye un recurso estratégico que concentra todos los elementos necesarios para garantizar la continuidad de los trabajos y el cumplimiento de los estándares de servicio. La aplicación permite centralizar la información de existencias, optimizar el control de entradas y salidas y reducir pérdidas derivadas de la falta de seguimiento adecuado.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li><u>Inventario:</u> Consulta de existencias, precios y detalles técnicos.</li>
          <li><u>Ingreso de Material:</u> Registro de nuevas adquisiciones.</li>
          <li><u>Movimientos:</u> Registro rápido de la salida (uso) de material por Orden de Trabajo.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h2>Beneficios Clave</h2>
        <p>
          Al digitalizar el control de stock con esta plataforma, logramos:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Reducción de Quiebres de Stock: Evitando demoras en la reparación de redes sanitarias y de agua potable.</li>
          <li>Control de Costos: Conociendo el precio unitario y el valor exacto del material en depósito.</li>
          <li>Trazabilidad: Saber *quién y *cuándo utilizó un material.</li>
        </ol>
      </div>

      <div style={{ height: '50px' }}></div> 

    </div>
  );
};

export default Home;