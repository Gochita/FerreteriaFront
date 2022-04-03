import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<div>Admin... </div>} />
          <Route path="/" element={"Inicio..."} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
