import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* 1. Título/Logo de la App (Será grande) */}
      <span className="app-title">
        <Link to="/">Stock de Materiales</Link>
      </span>
      
      {/* 2. Grupo de Navegación (Serán de tamaño uniforme) */}
      <div className="nav-links">
        <Link to="/">Inicio</Link> 
        <Link to="/inventario">Inventario</Link>
        <Link to="/nuevo">Nuevo Material</Link>
        <Link to="/movimientos">Movimientos</Link>
      </div>
    </nav>
  );
};

export default Navbar;