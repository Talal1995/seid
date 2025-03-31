import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/whatWeDo.css";
import getInvolvedImage from "../assets/getInvolved.png"; // Import for the Get Involved image

const GetInvolved = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // Ref for intersection observer
  const sectionRefs = useRef([]);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all section refs
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add ref to array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="program-section" ref={addToRefs}>
      <div className="program-content">
        {/* Get Involved Image */}
        <div className="program-image">
          <img src={getInvolvedImage} alt="Get Involved" loading="lazy" />
        </div>

        <div className="program-details">
          <h3 className="get-involved-subtitle">
            {t("whatWeDo.getInvolved.subTitle")}
          </h3>
          <p className="program-description">
            {t("whatWeDo.getInvolved.description")}
          </p>

          <div className="how-to-get-involved">
            <h3>{t("whatWeDo.getInvolved.howToGetInvolved.title")}</h3>
            <p>{t("whatWeDo.getInvolved.howToGetInvolved.step1")}</p>
            <div className="join-button-container">
              <Link to="/survey" className="join-now-button">
                {t("joinUsButton")}
              </Link>
            </div>
          </div>

          <div className="how-to-get-involved">
            <h3>
              {t("whatWeDo.getInvolved.howToGetInvolved.whatHappensNext")}
            </h3>
            <p>
              {t("whatWeDo.getInvolved.howToGetInvolved.nextStepDescription")}
            </p>
            <ul className="involvement-steps">
              <li>{t("whatWeDo.getInvolved.howToGetInvolved.step3")}</li>
              <li>{t("whatWeDo.getInvolved.howToGetInvolved.step4")}</li>
              <li>{t("whatWeDo.getInvolved.howToGetInvolved.step5")}</li>
            </ul>
          </div>

          <div className="how-to-get-involved">
            <h3>{t("whatWeDo.getInvolved.howToGetInvolved.exploreMore")}</h3>
            <p>
              {t(
                "whatWeDo.getInvolved.howToGetInvolved.exploreMoreDescription"
              )}
            </p>

            <div className="explore-options">
              <div className="explore-option">
                <h4>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.innovationAndInitiativesTitle"
                  )}
                </h4>
                <p>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.innovationAndInitiativesDescription"
                  )}
                </p>
              </div>

              <div className="explore-option">
                <h4>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.syrianExpertiseHubTitle"
                  )}
                </h4>
                <p>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.syrianExpertiseHubDescription"
                  )}
                </p>
              </div>

              <div className="explore-option">
                <h4>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.expertInsightsTitle"
                  )}
                </h4>
                <p>
                  {t(
                    "whatWeDo.getInvolved.howToGetInvolved.expertInsightsDescription"
                  )}
                </p>
              </div>
              <div className="join-button-container">
                <Link to="/what-we-do" className="join-now-button">
                  {t("learnMoreButton")}
                </Link>
              </div>
            </div>
          </div>

          <p className="opportunities-message">
            {t("whatWeDo.getInvolved.howToGetInvolved.opportunities")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
