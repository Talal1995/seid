import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/committees.css";
import backgroundLogo2 from "../assets/HomeImage0.jpeg";
import seidVideo from "../assets/seidVideo.mp4";
import togetherImage from "../assets/together.jpeg";
import syrianFlag from "../assets/HomeImage1.jpeg";
import CommitteesSection from "../components/CommitteesSection";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    document.body.style.fontFamily = isRTL
      ? "Markazi Text, serif"
      : "Open Sans, sans-serif";
  }, [direction, isRTL]);

  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [backgroundLogo2, syrianFlag];
  const carouselTexts = [
    {
      title: t("whoWeAre.visionAndMission.visionTitle"),
      text: t("whoWeAre.visionAndMission.vision"),
    },
    {
      title: t("whoWeAre.visionAndMission.missionTitle"),
      text: t("whoWeAre.visionAndMission.mission"),
    },
  ];

  // Function to handle image navigation
  const navigateToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [carouselImages.length]);

  // Add animation effect similar to what-we-do page
  useEffect(() => {
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
      {/* Hero Section with Image Carousel */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <h2>{carouselTexts[currentImageIndex].title}</h2>
          <p className="hero-text">{carouselTexts[currentImageIndex].text}</p>
        </div>

        {/* Image Carousel Navigation Pills */}
        <div className="carousel-navigation">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-pill ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => navigateToImage(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="main-content">
        <div className="content-container video-hero-layout">
          <div className="video-section-text">
            <h1 className="section-title">{t("home.title")}</h1>
            <p className="section-description">{t("home.description")}</p>
            <p className="section-description">{t("home.callToAction")}</p>
            <div className="buttons-container">
              <Link to="/survey" className="cta-button">
                {t("joinUsButton")}
              </Link>
              <Link to="/what-we-do" className="cta-button secondary-dark">
                {t("learnMoreButton")}
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="video-container">
            <video controls>
              <source src={seidVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="our-story-section">
        <div className="content-container">
          <div className="program-section">
            <div className="program-content">
              <div className="program-image">
                <img src={togetherImage} alt="Our Story" loading="lazy" />
              </div>
              <div className="program-details">
                <h2 className="program-title">
                  {t("whoWeAre.ourStory.pageTitle")}
                </h2>
                <p className="program-description">
                  {t("whoWeAre.ourStory.part1")}
                </p>
                <p className="program-description">
                  {t("whoWeAre.ourStory.part2")}
                </p>
                <h3 className="program-title">
                  {t("whoWeAre.ourStory.unifyingQuestion")}
                </h3>
                <p className="program-description">
                  {t("whoWeAre.ourStory.part3")}
                </p>
                <p className="program-description">
                  {t("whoWeAre.ourStory.howWeStarted")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommitteesSection />
    </div>
  );
};

export default Home;
