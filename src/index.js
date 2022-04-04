import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import generateStore from "./redux/Store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={generateStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
