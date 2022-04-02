import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        navbar...
        <Routes>
          <Route path="/" element={<div>Inicio... </div>} />
          <Route path="/login" element={<div>Login... </div>} />
          <Route path="/admin" element={<div>Admin... </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
