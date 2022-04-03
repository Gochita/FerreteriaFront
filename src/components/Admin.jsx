import React, { useState } from "react";
import { getAuth } from "../firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import fire from "../firebase";

const auth = getAuth(fire);
const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe un usuario");
    } else {
      console.log("no existe el usuario");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h2>Ruta protegida</h2>
    </div>
  );
};

export default Admin;
