import React from "react";
import { NavLink } from "react-router-dom";

//  Si l’URL actuelle correspond à celle de 
//  l’une des deux pages (Home ou About), 
//  la classe .active sera appliqué au lien 
//  de la page correspondante.
//  (ça sert à ajouter du style au lien)

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
