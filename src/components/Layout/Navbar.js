import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" class="nav__logo">
            Rick And<span> Morty</span>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
