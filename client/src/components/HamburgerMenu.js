// HamburgerMenu.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // For navigation
import "../styles/HamburgerMenu.css"; // New CSS file for hamburger styles

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
      <button
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu Content */}
      <div className={`menu-content ${isOpen ? "open" : ""}`}>
        <nav>
          <ul className="menu-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu} // Close menu on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/what-we-do"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                What We Do
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
