import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/home.css";
import backgroundLogo from "../assets/Logo7.jpeg";
import seidVideo from "../assets/seidVideo.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // Add animation effect similar to what-we-do page
  useEffect(() => {
    // This mimics the animation behavior in your what-we-do CSS
    const mainTitle = document.querySelector(".section-title");
    if (mainTitle) {
      mainTitle.style.opacity = "0";
      setTimeout(() => {
        mainTitle.style.opacity = "1";
        mainTitle.style.animation = "fadeInDown 0.8s ease-out forwards";
      }, 100);
    }
  }, []);

  return (
    <div className="home-page" dir={direction}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundLogo})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">{t("home.title")}</h1>
          <p className="hero-text">{t("home.description")}</p>
          <div className="buttons-container">
            <Link to="/survey" className="cta-button">
              {t("joinUsButton")}
            </Link>
            <Link to="/what-we-do" className="cta-button secondary">
              {t("learn More")}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-container">
          {/* <h2 className="section-title">{t("home.videoTitle")}</h2>
          <p className="section-subtitle">{t("home.videoDescription")}</p> */}

          {/* Video Section with improved styling */}
          <div className="video-container">
            <video controls>
              <source src={seidVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
