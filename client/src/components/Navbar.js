import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import "../styles/navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Get translation hook

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Change language when a new language is selected
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <h1>SEID </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">{t(" Home ")}</Link>
        </li>
        <li>
          <Link to="/about">{t(" About Us ")}</Link>
        </li>
        <li>
          <Link to="/what-we-do">{t("What We Do?")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("Contact Us")}</Link>
        </li>
      </ul>
      <div className="language-switcher">
        <button onClick={() => handleLanguageChange("en")}>
          {t("english")}
        </button>
        <button onClick={() => handleLanguageChange("ar")}>
          {t("العربية")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
