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
  const [showDropdown2, setShowDropdown2] = useState(false); // Added for the second dropdown
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navContentRef = useRef(null);
  const mobileToggleRef = useRef(null);

  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRTL);
  }, [i18n.language, isRTL]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setShowLanguages(false);
    if (window.innerWidth <= 768) {
      setMobileNavOpen(false);
    }
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (!mobileNavOpen) {
      setShowDropdown(false);
      setShowDropdown2(false); // Close the second dropdown when toggling mobile nav
    }
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
    setShowDropdown2(false); // Close the second dropdown when the first is toggled
  };

  const toggleDropdown2 = (e) => {
    e.stopPropagation();
    setShowDropdown2(!showDropdown2);
    setShowDropdown(false); // Close the first dropdown when the second is toggled
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".language-dropdown")
      ) {
        setShowDropdown(false);
        setShowDropdown2(false); // Close the second dropdown when clicking outside
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
      <div className="logo-container">
        <Link to="/">
          <img src={OnlyLogoVertical} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <button
        className="mobile-nav-toggle"
        onClick={toggleMobileNav}
        ref={mobileToggleRef}
      >
        <FaBars />
      </button>

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
          {/* First Dropdown */}
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
                e.preventDefault();
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
          {/* Second Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 768 && setShowDropdown2(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setShowDropdown2(false)
            }
          >
            <Link
              className={isActive("/contact")}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth <= 768) {
                  toggleDropdown2(e);
                }
              }}
            >
              {t("contact.pageTitle")}
            </Link>
            <div className={`dropdown-menu ${showDropdown2 ? "show" : ""}`}>
              <Link
                to="/contact"
                className={isActive("/contact")}
                onClick={handleNavLinkClick}
              >
                {t("contact.pageTitle")}
              </Link>
              <Link
                to="/qanda"
                className={isActive("/qanda")}
                onClick={handleNavLinkClick}
              >
                {t("faqsPageTitle")}
              </Link>
            </div>
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
