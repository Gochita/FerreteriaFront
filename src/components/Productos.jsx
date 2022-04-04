import React from "react";
import { useSelector } from "react-redux";
const Productos = () => {
  const productos = useSelector((store) => store.productos.array);
  return (
    <div>
      <div>
        <div>
          <br />
          <div className="container">
            <div className="row">
              {productos.map((item) => (
                <div key={item.idProducto} className="col-md-4 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <h5>{item.nombreProducto}</h5>
                      <p>Precio: {item.precioProducto}</p>
                      <p>Stock: {item.stock}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
