import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import fire from "../firebase";
import Clientes from "./Clientes";
import Vendedor from "./Vendedor";
import { useDispatch, useSelector } from "react-redux";
import { traerClientesAccion } from "../redux/ClienteDucks";
import {traerVendedoresAccion} from "../redux/VendedorDucks";

const auth = getAuth(fire);

const Admin = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clientes = useSelector((store) => store.clientes.array);
  const vendedores= useSelector((store) => store.vendedores.array );
  const handlerCliente = () => {
    navigate("/admin/clientes");
    dispatch(traerClientesAccion());
  };
  const handlerVendedores = () => {
    navigate("/admin/vendedores");
    dispatch(traerVendedoresAccion());
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
      <center>{user && <b>Bienvenido {user.email}</b>}</center>

      <hr />
      <button
        className="btn btn-dark btn-sm  "
        type="button"
        style={{ margin: "0 auto" }}
        onClick={handlerCliente}
      >
        Clientes
      </button>
      <button
        className="btn btn-dark btn-sm  "
        type="button"
        style={{ margin: "0 auto" }}
        onClick={handlerVendedores}
      >
        Vendedores
      </button>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/vendedores" element={<Vendedor/>}/>
      </Routes>
    </div>
  );
};

export default Admin;
