import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import vissionMission from "../assets/vissionMission.jpeg"; // Make sure to adjust the path

const VisionMission = () => {
  const { t, i18n } = useTranslation(); // Get i18n object to access current language

  // Determine the text direction based on language
  const isRTL = i18n.language === "ar"; // "ar" for Arabic
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="what-we-do-page" dir={direction}>
      <div className="program-section">
        <div className="program-content">
          <div className="program-image">
            <img src={vissionMission} alt="Expert Insights" loading="lazy" />
          </div>
          <div className="program-details">
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
    </div>
  );
};

export default VisionMission;
