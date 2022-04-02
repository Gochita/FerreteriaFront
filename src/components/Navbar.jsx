import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand px-2" to="/">Ferreteria</Link>
          <div className="d-flex">
              <NavLink className={"btn- btn-dark mr-2 active px-3"} to="/" exact >
                  Inicio
              </NavLink>
              <NavLink className={"btn- btn-dark mr-2 px-3" } to="/admin">
                    Admin
              </NavLink>
              <NavLink className={"btn- btn-dark mr-2 px-3"} to="/login">
                  Login
              </NavLink>
          </div>
      </div>

  )
}

export default Navbar
