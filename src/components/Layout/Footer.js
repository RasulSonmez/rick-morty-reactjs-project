import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/rickandmorty-logo.png";

function Footer() {
  return (
    <footer className="footer section ">
      <div className="container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
