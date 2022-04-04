import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerClientesAccion } from "../redux/ClienteDucks";

const Clientes = () => {
  const dispatch = useDispatch();

  const clientes = useSelector((store) => store.clientes.array);
  console.log(clientes);

  return (
    <div>
      <br />
      <button
        className="btn btn-sm btn-outline-dark btn-block mb-3"
        onClick={() => dispatch(traerClientesAccion())}
      >
        <i class="fa-solid fa-eye"></i>
      </button>
      <ul>
        <div className="row">
          {clientes.map((item) => (
            <div className="card">
              <li key={item.id}>
                <div className="card-body">
                  <h5>{item.nombreCliente}</h5>
                  <p> Documento: {item.cedCliente}</p>
                  <p>Celular: {item.telefonoCliente}</p>
                </div>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Clientes;
