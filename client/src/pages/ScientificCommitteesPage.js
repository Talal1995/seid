import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styles from "../styles/CommitteesPage.module.css";
import engineeringAdminMostafa from "../assets/mostafaIsa.jpeg";
import technologyAdminTalal from "../assets/talalAttar.jpeg";
import economyAdminMohammad from "../assets/mohammadBarhamji.jpeg";
import economyAdminAnas from "../assets/anasAlshugri.jpeg";
import engineeringAdminAlkudaymi from "../assets/mohammadAlkudaymi.jpeg";
import womanIcon from "../assets/womanIcon.jpeg";
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
          name: "Azhar Alimadi",
          title: " Teacher ",
          position: "Committee Coordinator",
          image: womanIcon,
          linkedin: "https://linkedin.com/in/member3",
        },
        {
          id: 2,
          name: "Jihad Rahmoon",
          title: " Teacher ",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member3",
        },
        {
          id: 3,
          name: "Nour Abdalsalam",
          title: " Teacher ",
          position: "Committee Coordinator",
          image: womanIcon,
          linkedin: "https://linkedin.com/in/member3",
        },
        {
          id: 4,
          name: "Alaa Shubat",
          title: " Teacher ",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member3",
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
          name: "Mohammad Barhamji",
          title: " Master in Economics",
          position: " Committee Coordinator",
          image: economyAdminMohammad,
          linkedin: "https://linkedin.com/in/member6",
        },
        {
          id: 2,
          name: "Anas Alsheghri",
          title: " Master in Economics",
          position: " Committee Coordinator",
          image: economyAdminAnas,
          linkedin: "https://linkedin.com/in/member6",
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
          name: "Eng. Mostafa Isa",
          title: "Project Manager",
          position: "Committee Coordinator",
          image: engineeringAdminMostafa,
          linkedin: "https://linkedin.com/in/member1",
        },
        {
          id: 2,
          name: "Joud tulimat",
          title: "Civil Engineer",
          position: "Committee Coordinator",
          image: womanIcon,
          linkedin: "https://linkedin.com/in/member1",
        },
        {
          id: 3,
          name: "Eng. Osama Al Dakkkak",
          title: "Civil Engineer ",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member1",
        },
        {
          id: 4,
          name: "Eng. Ahmad Shubat ",
          title: "Civil Engineer",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member1",
        },
        {
          id: 5,
          name: "Eng. Mohamad Alkudaymi ",
          title: "Architect Engineer",
          position: "Committee Coordinator",
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
          name: "Dr. Maher Alfarra",
          title: "Doctor",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member5",
        },
        {
          id: 2,
          name: "Ghiath Mohammad",
          title: "Master in Medicine",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member5",
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
          name: "Waleed Haji",
          title: " Bachelor in Law",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member4",
        },
        {
          id: 2,
          name: "Basheer Alme ",
          title: " Bachelor in Law",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member4",
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
          name: "Eng. Talal Attar",
          title: "Bachelor in Computer Science",
          position: "Committee Coordinator",
          image: technologyAdminTalal,
          linkedin: "https://linkedin.com/in/member7",
        },
        {
          id: 2,
          name: "Mohamed Ali Maghreby",
          title: "Bachelor in cyber security",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member7",
        },
        {
          id: 3,
          name: "Alaa Alboush",
          title: "Bachelor in Computer Science",
          position: "Committee Coordinator",
          image: manIcon,
          linkedin: "https://linkedin.com/in/member7",
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
