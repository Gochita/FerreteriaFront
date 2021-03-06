import React from "react";
import { useSelector } from "react-redux";
import {imprimir} from "../pdf/pdf";
const Facturas = () => {
  const handlerImprimir = (item) => {
    imprimir(item);
  };
  const facturas = useSelector((store) => store.facturas.array);
  return (
    <div>
      <br />

      <div className="container">
        <div className="row">
          {facturas.map((item) => (
            <div key={item.consec} className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5>Nombre: {item.nombreCliente}</h5>
                  <p>Productos</p>
                  {item.listaProductosFactura.map(p => {
                    return(
                        <div key={p.idProducto} >
                            <p>Articulo: {p.nombreProducto} {p.precioProducto} / cant: 1</p>
                        </div>
                    )
                })}
                  <p>Total a pagar:{item.totalPagar}</p>
                  <p>Fecha: {item.fechaFactura}</p>
                  <p> Vendedor: {item.nombreVendedor}</p>
                  <button
                  type="button"
                  className="btn btn-dark btn-lg page"
                  onClick={() => handlerImprimir(item)}
                >
                  Imprimir
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facturas;
