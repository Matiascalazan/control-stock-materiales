import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <span className="app-title">
        <Link to="/">Monitoreo de Depósito</Link>
      </span>
      
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