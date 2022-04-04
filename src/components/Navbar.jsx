import React from 'react'
import {Link, NavLink,useNavigate} from 'react-router-dom'
import { getAuth } from "firebase/auth";
import fire from "../firebase";

const Navbar = (props) => {
    const navigate = useNavigate();
    const auth = getAuth(fire);

    const logOut = () => {
      auth.signOut().then(() => {
        navigate("/login");
      });
    };

  return (
<main>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand " to="/">
            Ferreteria
          </Link>
          <div>
            <div className="d-flex">
              <NavLink className="btn btn-dark mr-2" to="/">
                Inicio
              </NavLink>
              {props.firebaseUser !== null ? (
                <NavLink className="btn btn-dark mr-2" to="/admin">
                  Admin
                </NavLink>
              ) : null}

              {props.firebaseUser !== null ? (
                <button
                  className="btn btn-dark mr-2"
                  onClick={() => logOut()}
                >
                  Cerrar Sesion
                </button>
              ) : (
                <NavLink className="btn btn-dark mr-2" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </main>

  )
}

export default Navbar
