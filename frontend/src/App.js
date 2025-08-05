import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BuscarVendedores from './pages/BuscarVendedores';
import CrearPerfil from './pages/CrearPerfil';
import ComoFunciona from './pages/ComoFunciona';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar-vendedores" element={<BuscarVendedores />} />
          <Route path="/crear-perfil" element={<CrearPerfil />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;