import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="hamburger-menu">
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
