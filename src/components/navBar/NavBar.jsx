import React from "react";
import { Link } from "react-router-dom";
import "./_navBar.scss";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
