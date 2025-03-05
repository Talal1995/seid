import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Syrian Experts</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/what-we-do">What We do</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
