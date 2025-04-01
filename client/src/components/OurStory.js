import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import aboutLogo from "../assets/Logo5.jpeg";

const OurStory = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="what-we-do-page" dir={direction}>
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
    </div>
  );
};

export default OurStory;
