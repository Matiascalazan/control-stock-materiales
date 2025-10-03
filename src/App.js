import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import NuevoMaterial from './pages/NuevoMaterial';
import EditarMaterial from './pages/EditarMaterial';
import Movimientos from './pages/Movimientos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/nuevo" element={<NuevoMaterial />} />
          <Route path="/editar/:id" element={<EditarMaterial />} /> 
          <Route path="/movimientos" element={<Movimientos />} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;