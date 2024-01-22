import "../src/App.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import LaOptica from "./pages/LaOptica";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="laOptica" element={<LaOptica />} />
          <Route path="productos" element={<Productos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
