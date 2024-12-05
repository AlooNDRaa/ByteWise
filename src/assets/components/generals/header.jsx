import React from "react";
import logo from "../../../img/color-bw-03.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <header>
        <a href="/" className="headerLink">
        <img src={logo} alt="Logo" className="logo" />
        </a>
      </header>
      <ul className="ul-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tareasYhabitos">Tareas y habitos</Link>
        </li>
        <li>
          <Link to="/transactions">Transacciones</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
