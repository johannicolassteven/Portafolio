import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/Proyectos";
import Navbar from "./components/Navbar";
import {Home,Proyectos,Experience,Contact} from "./Pages/Index";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/contacto" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
