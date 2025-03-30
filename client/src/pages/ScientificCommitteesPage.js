import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styles from "../styles/CommitteesPage.module.css";
import engineeringAdminMostafa from "../assets/mostafaIsa.jpeg";
import technologyAdminTalal from "../assets/talalAttar.jpeg";
import economyAdminMohammad from "../assets/mohammadBarhamji.jpeg";
import economyAdminAnas from "../assets/anasAlshugri.jpeg";
import engineeringAdminAlkudaymi from "../assets/mohammadAlkudaymi.jpeg";
import osamaAlDakkak from "../assets/OsamaAldakkak.jpeg";
import ghiathMohammad from "../assets/GhiathMohammad.jpeg";
import joudTulimat from "../assets/JoudTulimat.jpeg";
import azharAlimadi from "../assets/AzharAlimadi.jpeg";
import maherAlfarra from "../assets/MaherAlfarra.jpeg";
import nourAbdalsalam from "../assets/NourAbdelsalam.jpeg";
import basheerAlmuhaimid from "../assets/BasherAlmehemed.jpeg";
import jihadRahmoon from "../assets/JihadRahmoon.jpeg";
import alaaShubat from "../assets/alaaShubat.jpeg";
import AhmadShubat from "../assets/AhmadShubat.jpeg";

import manIcon from "../assets/manIcon.jpeg";

// Add more member imports as needed
const CSSModuleCommitteesPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";
  const location = useLocation();

  // Get committee from URL parameters
  const queryParams = new URLSearchParams(location.search);
  const committeeParam = queryParams.get("committee");

  // State to track which committee is selected (default to engineering or URL parameter)
  const [selectedCommittee, setSelectedCommittee] = useState(
    committeeParam || "engineering"
  );
  const [animateDetails, setAnimateDetails] = useState(false);

  // Committee data with members
  const committees = [
    {
      id: "education",
      title: t("scientificCommittees.educationTitle"),
      icon: "🎓",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.azharAlimadi.name`),
          title: t(`scientificCommittees.members.azharAlimadi.title`),
          position: t(`scientificCommittees.members.azharAlimadi.position`),
          image: azharAlimadi,
          linkedin:
            "https://www.linkedin.com/in/azhar-alimadi-a3528695?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.jihadRahmoon.name`),
          title: t(`scientificCommittees.members.jihadRahmoon.title`),
          position: t(`scientificCommittees.members.jihadRahmoon.position`),
          image: jihadRahmoon,
          linkedin:
            "https://www.linkedin.com/in/jihad-rahmoon-61428a71?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 3,
          name: t(`scientificCommittees.members.nourAbdalsalam.name`),
          title: t(`scientificCommittees.members.nourAbdalsalam.title`),
          position: t(`scientificCommittees.members.nourAbdalsalam.position`),
          image: nourAbdalsalam,
          linkedin: "",
        },
        {
          id: 4,
          name: t(`scientificCommittees.members.alaaShubat.name`),
          title: t(`scientificCommittees.members.alaaShubat.title`),
          position: t(`scientificCommittees.members.alaaShubat.position`),
          image: alaaShubat,
          linkedin: "",
        },
        // Add more education committee members
      ],
    },
    {
      id: "economy",
      title: t("scientificCommittees.economyTitle"),
      icon: "📊",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.mohammadBarhamji.name`),
          title: t(`scientificCommittees.members.mohammadBarhamji.title`),
          position: t(`scientificCommittees.members.mohammadBarhamji.position`),
          image: economyAdminMohammad,
          linkedin: "https://www.linkedin.com/in/mohamad-barhamji/",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.anasAlshugri.name`),
          title: t(`scientificCommittees.members.anasAlshugri.title`),
          position: t(`scientificCommittees.members.anasAlshugri.position`),
          image: economyAdminAnas,
          linkedin: "",
        },
        // Add more economy committee members
      ],
    },
    {
      id: "engineering",
      title: t("scientificCommittees.engineeringTitle"),
      icon: "🔧",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.mostafaIsa.name`),
          title: t(`scientificCommittees.members.mostafaIsa.title`),
          position: t(`scientificCommittees.members.mostafaIsa.position`),
          image: engineeringAdminMostafa,
          linkedin: "https://linkedin.com/in/mostafaisa",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.talalAttar.name`),
          title: t(`scientificCommittees.members.talalAttar.title`),
          position: t(`scientificCommittees.members.talalAttar.position`),
          image: technologyAdminTalal,
          linkedin: "https://www.linkedin.com/in/talal-attar-3b7229182/",
        },
        {
          id: 3,
          name: t(`scientificCommittees.members.joudTulimat.name`),
          title: t(`scientificCommittees.members.joudTulimat.title`),
          position: t(`scientificCommittees.members.joudTulimat.position`),
          image: joudTulimat,
          linkedin:
            "https://www.linkedin.com/in/joud-tulimat-a33352225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 4,
          name: t(`scientificCommittees.members.alaaAlboush.name`),
          title: t(`scientificCommittees.members.alaaAlboush.title`),
          position: t(`scientificCommittees.members.alaaAlboush.position`),
          image: manIcon,
          linkedin: "",
        },
        {
          id: 5,
          name: t(`scientificCommittees.members.osamaAlDakkak.name`),
          title: t(`scientificCommittees.members.osamaAlDakkak.title`),
          position: t(`scientificCommittees.members.osamaAlDakkak.position`),
          image: osamaAlDakkak,
          linkedin:
            "https://www.linkedin.com/in/osama-aldakkak-a6165838?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 6,
          name: t(`scientificCommittees.members.ahmadShubat.name`),
          title: t(`scientificCommittees.members.ahmadShubat.title`),
          position: t(`scientificCommittees.members.ahmadShubat.position`),
          image: AhmadShubat,
          linkedin: "",
        },
        {
          id: 7,
          name: t(`scientificCommittees.members.mohammadAlkudaymi.name`),
          title: t(`scientificCommittees.members.mohammadAlkudaymi.title`),
          position: t(
            `scientificCommittees.members.mohammadAlkudaymi.position`
          ),
          image: engineeringAdminAlkudaymi,
          linkedin:
            "https://www.linkedin.com/in/mohamad-alkudaymi-5b57b36a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        // Add more members as needed
      ],
    },
    {
      id: "healthCare",
      title: t("scientificCommittees.healthTitle"),
      icon: "🏥",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.maherAlfarra.name`),
          title: t(`scientificCommittees.members.maherAlfarra.title`),
          position: t(`scientificCommittees.members.maherAlfarra.position`),
          image: maherAlfarra,
          linkedin: "",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.ghiathMohammad.name`),
          title: t(`scientificCommittees.members.ghiathMohammad.title`),
          position: t(`scientificCommittees.members.ghiathMohammad.position`),
          image: ghiathMohammad,
          linkedin: "https://www.linkedin.com/in/ghiath-mohammad",
        },
        // Add more healthcare committee members
      ],
    },
    {
      id: "law",
      title: t("scientificCommittees.lawTitle"),
      icon: "⚖️",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.waleedHaji.name`),
          title: t(`scientificCommittees.members.waleedHaji.title`),
          position: t(`scientificCommittees.members.waleedHaji.position`),
          image: manIcon,
          linkedin: "",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.basheerAlmuhaimid.name`),
          title: t(`scientificCommittees.members.basheerAlmuhaimid.title`),
          position: t(
            `scientificCommittees.members.basheerAlmuhaimid.position`
          ),
          image: basheerAlmuhaimid,
          linkedin: "",
        },
        // Add more law committee members
      ],
    },
    {
      id: "technology",
      title: t("scientificCommittees.technologyTitle"),
      icon: "💻",
      members: [
        {
          id: 1,
          name: t(`scientificCommittees.members.talalAttar.name`),
          title: t(`scientificCommittees.members.talalAttar.title`),
          position: t(`scientificCommittees.members.talalAttar.position`),
          image: technologyAdminTalal,
          linkedin: "https://www.linkedin.com/in/talal-attar-3b7229182/",
        },
        {
          id: 2,
          name: t(`scientificCommittees.members.mohamedAliMaghreby.name`),
          title: t(`scientificCommittees.members.mohamedAliMaghreby.title`),
          position: t(
            `scientificCommittees.members.mohamedAliMaghreby.position`
          ),
          image: manIcon,
          linkedin: "",
        },
        {
          id: 3,
          name: t(`scientificCommittees.members.alaaAlboush.name`),
          title: t(`scientificCommittees.members.alaaAlboush.title`),
          position: t(`scientificCommittees.members.alaaAlboush.position`),
          image: manIcon,
          linkedin: "",
        },
        // Add more technology committee members
      ],
    },
  ];

  // Handle committee tab click
  const handleCommitteeClick = (committeeId) => {
    if (committeeId !== selectedCommittee) {
      setAnimateDetails(false);
      setTimeout(() => {
        setSelectedCommittee(committeeId);
        setAnimateDetails(true);
        // Update URL without page reload
        const newUrl = `${window.location.pathname}?committee=${committeeId}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }, 300);
    }
  };

  // Find the selected committee data
  const selectedCommitteeData =
    committees.find((committee) => committee.id === selectedCommittee) ||
    committees[0]; // Fallback to first committee if not found

  // Animation effect for page elements
  useEffect(() => {
    // Initialize animation state
    setAnimateDetails(true);
  }, []);

  // Update selected committee when URL parameter changes
  useEffect(() => {
    if (
      committeeParam &&
      committees.some((committee) => committee.id === committeeParam)
    ) {
      setSelectedCommittee(committeeParam);
      setAnimateDetails(true);
    }
  }, [committeeParam]);

  return (
    <div className={styles.pageContainer} dir={direction}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>
          {t("scientificCommittees.pageTitle")}
        </h1>

        {/* Committee tabs navigation - 3D card style */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsGrid}>
            {committees.map((committee) => (
              <div
                key={committee.id}
                className={`${styles.tabItem} ${
                  committee.id === selectedCommittee ? styles.active : ""
                }`}
                onClick={() => handleCommitteeClick(committee.id)}
                role="tab"
                aria-selected={committee.id === selectedCommittee}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCommitteeClick(committee.id);
                  }
                }}
              >
                <span className={styles.tabIcon} aria-hidden="true">
                  {committee.icon}
                </span>
                <span className={styles.tabText}>{committee.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Committee members view with animation */}
        <div
          className={`${styles.detailsContainer} ${
            animateDetails ? styles.fadeInUp : ""
          }`}
          style={{ opacity: animateDetails ? 1 : 0 }}
        >
          <h2 className={styles.detailsTitle}>
            {t("scientificCommittees.committeesMemberOf")}{" "}
            {selectedCommitteeData.title}
          </h2>

          <div className={styles.membersGrid}>
            {selectedCommitteeData.members.map((member, index) => (
              <div
                key={member.id}
                className={styles.memberCard}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: animateDetails
                    ? `${styles.fadeInUp} 0.8s ease-out forwards`
                    : "none",
                }}
              >
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSModuleCommitteesPage;
