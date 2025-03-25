import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>Syrian Experts</h3>
          <p>
            The Syrian Initiative for Expertise and Development connects Syrian
            professionals worldwide to contribute to Syria's future.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vision-mission"> Vision and Mission</Link>
            </li>
            <li>
              <Link to="/our-story"> Our Story</Link>
            </li>
            <li>
              <Link to="/what-we-do">What We Do</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <address>
            <p>
              <FaMapMarkerAlt /> 123 Main Street, City, Country
            </p>
            <p>
              <FaEnvelope /> info@seid.org
            </p>
            <p>
              <FaPhone /> +1 (234) 567-8900
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 SEID - Syrian Initiative for Expertise and Development. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
