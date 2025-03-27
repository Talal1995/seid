import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/committees.css";

// Import committee images - you'll need to add these to your assets folder
import engineeringCommitteeImg from "../assets/engineering.jpeg";
import educationCommitteeImg from "../assets/education.jpeg";
import lawCommitteeImg from "../assets/law.jpeg";
import healthCareCommitteeImg from "../assets/healthcare.jpeg";
import economyCommitteeImg from "../assets/economy.jpeg";
import technologyCommitteeImg from "../assets/technology.jpeg";

const CommitteesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // Committee data
  const committees = [
    {
      id: "engineering",
      image: engineeringCommitteeImg,
      title: t("scientificCommittees.engineeringTitle"),
    },
    {
      id: "education",
      image: educationCommitteeImg,
      title: t("scientificCommittees.educationTitle"),
    },
    {
      id: "law",
      image: lawCommitteeImg,
      title: t("scientificCommittees.lawTitle"),
    },
    {
      id: "healthCare",
      image: healthCareCommitteeImg,
      title: t("scientificCommittees.healthTitle"),
    },
    {
      id: "economy",
      image: economyCommitteeImg,
      title: t("scientificCommittees.economyTitle"),
    },
    {
      id: "technology",
      image: technologyCommitteeImg,
      title: t("scientificCommittees.technologyTitle"),
    },
  ];

  return (
    <section className="committees-section" dir={direction}>
      <div className="content-container">
        <h2 className="section-title">{t("scientificCommittees.pageTitle")}</h2>

        {/* Committee cards grid */}
        <div className="committees-grid">
          {committees.map((committee) => (
            <Link
              key={committee.id}
              to={`/scientific-committees?committee=${committee.id}`}
              className="committee-card-link"
            >
              <div className="committee-card">
                <div className="committee-image">
                  <img src={committee.image} alt={committee.title} />
                  <div className="committee-overlay">
                    <h3 className="committee-title">{committee.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
