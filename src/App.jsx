import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import fire from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./style/coolstuff.scss";
import inicio from "./img/ferreteria.jpg";

function App() {
  const auth = getAuth(fire);
  const [firebaseUser, setFirebaseUser] = React.useState(false);
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <div className="container page">
        <Navbar firebaseUser={firebaseUser} />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>
                  <center>
                    <br />
                    <img src={inicio} className="ImagenInicial" alt="Logo" />
                    <div className="App">
                      <div className="centrado"></div>
                    </div>
                  </center>
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<h1>404 NotFoundPage</h1>} />
        </Routes>
      </div>
    </Router>
  ) : (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Cargando..
    </button>
  );
}

export default App;
