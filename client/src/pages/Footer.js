import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>Syrian Expertise</h3>
          <p>{t("home.description")}</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/groups/9607764639252406"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/the-syrian-initiative-for-expertise-and-development/about/?viewAsMember=true"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("home.pageTitle")}
              </Link>
            </li>
            <li>
              <Link
                to="/our-team"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("whoWeAre.ourTeam.pageTitle")}
              </Link>
            </li>
            <li>
              <Link
                to="/what-we-do"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("whatWeDo.pageTitle")}
              </Link>
            </li>
            <li>
              <Link
                to="/scientific-committees"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("scientificCommittees.pageTitle")}
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("whatWeDo.getInvolved.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/survey"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("survey.pageTitle")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("contact.pageTitle")}
              </Link>
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
        <p>
          Developed by
          <a
            href="https://www.linkedin.com/in/talal-attar-3b7229182/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <strong> Talal Attar</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
