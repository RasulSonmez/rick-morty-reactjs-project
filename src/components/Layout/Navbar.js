import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/rickandmorty-logo.png";

function Navbar() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <img src={logo} alt="logo" />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
