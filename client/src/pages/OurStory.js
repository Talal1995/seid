import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import aboutLogo from "../assets/Logo5.jpeg"; // Import the image

const OurStory = () => {
  const { t, i18n } = useTranslation(); // Get i18n object to access current language

  // Determine the text direction based on language
  const isRTL = i18n.language === "ar"; // "ar" for Arabic
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="what-we-do-page" dir={direction}>
      <div className="program-section">
        <div className="program-content">
          <div className="program-image">
            <img src={aboutLogo} alt="Expert Insights" loading="lazy" />
          </div>{" "}
          <div className="program-details">
            <h2 className="program-title">{t("about.ourStory.title")}</h2>
            <p className="program-description">{t("about.ourStory.part1")}</p>
            <p className="program-description">{t("about.ourStory.part2")}</p>
            <h3 className="program-title">
              {t("about.ourStory.unifyingQuestion")}
            </h3>
            <p className="program-description">{t("about.ourStory.part3")}</p>
            <p className="program-description">
              {t("about.ourStory.howWeStarted")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
