import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer section ">
      <div className="container">
        <Link to="/" class="nav__logo">
          Rick And<span> Morty</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
