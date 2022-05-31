import React from "react";
import { Link } from "react-router-dom";
//images
import logo from "../../assets/rickandmorty-logo.png";
import logoimgtwo from "../../assets/rickandmorty-img-1.png";

function Navbar() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <img src={logo} alt="logo" />
            <img src={logoimgtwo} alt="logo" />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
