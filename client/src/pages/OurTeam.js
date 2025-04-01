import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/ourTeam.css";
import boardMembers from "../data/boardMembers";

const OurTeam = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="our-team-page" dir={direction}>
      <h2 className="main-title">{t("whoWeAre.ourTeam.pageTitle")}</h2>
      <div className="team-grid">
        {boardMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            {/* Dynamically fetch the name and position from the translation file */}
            <h3 className="team-name">
              {t(
                `scientificCommittees.members.${member.name
                  .replace(/\s+/g, "")
                  .toLowerCase()}.name`
              )}
            </h3>
            <p className="team-profession">
              {t(
                `scientificCommittees.members.${member.name
                  .replace(/\s+/g, "")
                  .toLowerCase()}.title`
              )}
            </p>
            <p className="subtitle">
              {t(
                `scientificCommittees.members.${member.name
                  .replace(/\s+/g, "")
                  .toLowerCase()}.position`
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
