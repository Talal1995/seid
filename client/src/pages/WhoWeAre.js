import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import aboutLogo from "../assets/Logo5.jpeg";

const WhoWeAre = () => {
  const { t, i18n } = useTranslation();
  // Determine the text direction based on language
  const isRTL = i18n.language === "ar"; // "ar" for Arabic
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="what-we-do-page" dir={direction}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="main-title">{t("whoWeAre.pageTitle")}</h1>
        <div className="program-section">
          <div className="program-content">
            <div className="program-image">
              <img src={aboutLogo} alt="Expert Insights" loading="lazy" />
            </div>
            <div className="program-details">
              <h2 className="program-title">{t("whoWeAre.pageTitle")}</h2>
              <h3 className="program-title">
                {t("whoWeAre.visionAndMission.visionTitle")}
              </h3>
              <p className="program-description">
                {t("whoWeAre.visionAndMission.vision")}
              </p>
              <h3 className="program-title">
                {t("whoWeAre.visionAndMission.missionTitle")}
              </h3>
              <p className="program-description">
                {t("whoWeAre.visionAndMission.mission")}
              </p>
            </div>
          </div>
        </div>

        <div className="program-section">
          <div className="program-content">
            <div className="program-image">
              <img src={aboutLogo} alt="Expert Insights" loading="lazy" />
            </div>{" "}
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

        <div className="program-section">
          <div className="program-content">
            <div className="program-details">
              <h2 className="program-title">
                {t("whoWeAre.ourTeam.description")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
