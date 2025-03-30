import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>Syrian Expertise</h3>
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
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/"> {t("home.pageTitle")}</Link>
            </li>
            <li>
              <Link to="/our-team"> {t("whoWeAre.ourTeam.pageTitle")}</Link>
            </li>
            <li>
              <Link to="/what-we-do">{t("whatWeDo.pageTitle")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact.pageTitle")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <address>
            <p>
              <FaEnvelope /> info@syrianexpertise.org
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
