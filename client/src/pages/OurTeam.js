import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/ourTeam.css";
import teamMembers from "../data/teamMembers";

const OurTeam = () => {
  const { t, i18n } = useTranslation(); // Get i18n object to access current language
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="our-team-page" dir={direction}>
      <h2 className="main-title">{t("whoWeAre.ourTeam.pageTitle")}</h2>
      {/* <p className="subtitle">{t("whoWeAre.ourTeam.description")}</p> */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-profession">{member.profession}</p>
            <p className="team-location">{member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
