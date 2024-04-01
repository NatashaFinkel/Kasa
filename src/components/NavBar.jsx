import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
