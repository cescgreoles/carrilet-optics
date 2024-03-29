import "../src/App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Especialidades from "./pages/Especialidades";
import Servicios from "./pages/Servicios";
import Home from "./pages/Home";
import LaOptica from "./pages/LaOptica";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="laOptica" element={<LaOptica />} />
          <Route path="especialidades" element={<Especialidades />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contactPage" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
