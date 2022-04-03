import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import fire from "../firebase";
import Clientes from "./Clientes";

const auth = getAuth(fire);
const Admin = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handlerCliente = () => {
    navigate("/admin/clientes");
  };

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe un usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe el usuario");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      {user && <h3>{user.email}</h3>}

      <button
        className="btn btn-dark btn-sm  "
        type="button"
        style={{ margin: "0 auto" }}
        onClick={handlerCliente}
      >
        Clientes
      </button>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </div>
  );
};

export default Admin;
