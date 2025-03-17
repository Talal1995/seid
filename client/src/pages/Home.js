import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <div className="orbit-container">
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit"></div>
      </div>
      <div className="hero">
        <h1 className="hero-title">{t("home.title")}</h1>
        <p className="hero-text">{t("home.description")}</p>
        <button className="cta-button">{t("home.callToAction")}</button>
      </div>
    </div>
  );
};

export default Home;
