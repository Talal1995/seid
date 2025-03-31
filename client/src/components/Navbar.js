import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import OnlyLogoVertical from "../assets/OnlyLogoVertical.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navContentRef = useRef(null);
  const mobileToggleRef = useRef(null);

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
    // Close mobile menu when changing language
    if (window.innerWidth <= 768) {
      setMobileNavOpen(false);
    }
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (!mobileNavOpen) setShowDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  // Close mobile menu when clicking on a navigation link
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMobileNavOpen(false);
    }
  };

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
          <img src={OnlyLogoVertical} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="mobile-nav-toggle"
        onClick={toggleMobileNav}
        ref={mobileToggleRef}
      >
        <FaBars />
      </button>

      {/* Navigation links and language selector */}
      <div
        className={`nav-content ${mobileNavOpen ? "open" : ""}`}
        ref={navContentRef}
      >
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")} onClick={handleNavLinkClick}>
              {t("home.pageTitle")}
            </Link>
          </li>
          <li>
            <Link
              to="/what-we-do"
              className={isActive("/what-we-do")}
              onClick={handleNavLinkClick}
            >
              {t("whatWeDo.pageTitle")}
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className={isActive("/our-team")}
              onClick={handleNavLinkClick}
            >
              {t("whoWeAre.ourTeam.pageTitle")}
            </Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 768 && setShowDropdown(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setShowDropdown(false)
            }
          >
            <Link
              className={isActive("/who-we-are")}
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation for dropdown toggle
                if (window.innerWidth <= 768) {
                  toggleDropdown(e);
                }
              }}
            >
              {t("survey.linkTitle")}
            </Link>
            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <Link
                to="/get-involved"
                className={isActive("/get-involved")}
                onClick={handleNavLinkClick}
              >
                {t("whatWeDo.getInvolved.title")}
              </Link>
              <Link
                to="/survey"
                className={isActive("/survey")}
                onClick={handleNavLinkClick}
              >
                {t("survey.pageTitle")}
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact")}
              onClick={handleNavLinkClick}
            >
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
