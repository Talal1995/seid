import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import logo4 from "../assets/Logo4.jpeg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine the direction based on language
  const isRTL = i18n.language === "ar";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRTL);
  }, [isRTL]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    // Set the document direction based on language
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setShowLanguages(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (!mobileNavOpen) setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".language-dropdown")
      ) {
        setShowDropdown(false);
        setShowLanguages(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Logo container - will be positioned differently based on language direction */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo4} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
        <FaBars />
      </button>

      {/* Navigation links and language selector */}
      <div className={`nav-content ${mobileNavOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>
              {t("home.pageTitle")}
            </Link>
          </li>
          <li>
            <Link to="/what-we-do" className={isActive("/what-we-do")}>
              {t("whatWeDo.pageTitle")}
            </Link>
          </li>

          <li>
            <Link to="/our-team" className={isActive("/our-team")}>
              {t("whoWeAre.ourTeam.pageTitle")}
            </Link>
          </li>
          <li>
            <Link to="/survey" className={isActive("/survey")}>
              {t("survey.linkTitle")}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              {t("contact.pageTitle")}
            </Link>
          </li>
        </ul>

        <div className="language-dropdown">
          <button
            className="globe-icon"
            onClick={(e) => {
              e.stopPropagation();
              setShowLanguages(!showLanguages);
            }}
          >
            <FaGlobe />
          </button>

          {showLanguages && (
            <div className="language-menu show">
              <button onClick={() => handleLanguageChange("en")}>
                English
              </button>
              <button onClick={() => handleLanguageChange("ar")}>
                العربية
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
