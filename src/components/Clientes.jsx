import React from "react";
import { useSelector } from "react-redux";

const Clientes = () => {

  const clientes = useSelector((store) => store.clientes.array);


  return (
    <div>
      <br />


      <div className="container">
        <div className="row">
          {clientes.map((item) => (
            <div key={item.id} className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5>{item.nombreCliente}</h5>
                  <p> Documento: {item.cedCliente}</p>
                  <p>Celular: {item.telefonoCliente}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
