import React from "react";
import { useSelector } from "react-redux";

const Vendedor = () => {
  const vendedores = useSelector((store) => store.vendedores.array);
  return (
    <div>
      <div>
        <br />

        <div className="container">
          <div className="row">
            {vendedores.map((item) => (
              <div key={item.idVendedor} className="col-md-4 mb-2">
                <div className="card">
                  <div className="card-body">
                    <h5>{item.nombreVendedor}</h5>
                    <p>Documento: {item.cedVendedor}</p>
                    <p>Celular: {item.celularVendedor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Vendedor;
