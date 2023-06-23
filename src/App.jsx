import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/Proyectos";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/proyectos" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
