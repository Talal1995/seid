import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import InnovationAndInitiativesLogo from "../assets/whatWeDoPart1.jpeg";
import syrianHub from "../assets/Logo5.jpeg";
import expertInsights from "../assets/expertInsight.jpeg";

const WhatWeDo = () => {
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
    <div className="what-we-do-page" dir={direction}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="main-title">{t("whatWeDo.pageTitle")}</h1>

        <div className="program-section" ref={addToRefs}>
          <div className="program-content">
            <div className="program-image">
              <img
                src={InnovationAndInitiativesLogo}
                alt={
                  t("whatWeDo.innovationAndInitiatives.imageAlt") ||
                  "Innovation & Initiatives"
                }
                loading="lazy"
              />
            </div>
            <div className="program-details">
              <h2 className="program-title">
                {t("whatWeDo.innovationAndInitiatives.title")}
              </h2>
              <p className="program-description">
                {t("whatWeDo.innovationAndInitiatives.description")}
              </p>

              <div className="how-to-get-involved">
                <h3>
                  {t(
                    "whatWeDo.innovationAndInitiatives.howToGetInvolved.title"
                  )}
                </h3>
                <ul className="involvement-steps">
                  <li>
                    {t(
                      "whatWeDo.innovationAndInitiatives.howToGetInvolved.step1"
                    )}
                  </li>
                  <li>
                    {t(
                      "whatWeDo.innovationAndInitiatives.howToGetInvolved.step2"
                    )}
                  </li>
                  <li>
                    {t(
                      "whatWeDo.innovationAndInitiatives.howToGetInvolved.step3"
                    )}
                  </li>
                  <li>
                    {t(
                      "whatWeDo.innovationAndInitiatives.howToGetInvolved.step4"
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="program-section" ref={addToRefs}>
          <div className="program-content">
            <div className="program-image">
              <img
                src={syrianHub}
                alt={
                  t("whatWeDo.syrianExpertiseHub.imageAlt") ||
                  "Syrian Expertise Hub"
                }
                loading="lazy"
              />
            </div>
            <div className="program-details">
              <h2 className="program-title">
                {t("whatWeDo.syrianExpertiseHub.title")}
              </h2>
              <p className="program-description">
                {t("whatWeDo.syrianExpertiseHub.description")}
              </p>

              <div className="how-to-get-involved">
                <h3>
                  {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.title")}
                </h3>
                <ul className="involvement-steps">
                  <li>
                    {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step1")}
                  </li>
                  <li>
                    {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step2")}
                  </li>
                  <li>
                    {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step3")}
                  </li>
                  <li>
                    {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="program-section" ref={addToRefs}>
          <div className="program-content">
            <div className="program-image">
              <img
                src={expertInsights}
                alt={t("whatWeDo.expertInsights.imageAlt") || "Expert Insights"}
                loading="lazy"
              />
            </div>
            <div className="program-details">
              <h2 className="program-title">
                {t("whatWeDo.expertInsights.title")}
              </h2>
              <p className="program-description">
                {t("whatWeDo.expertInsights.description")}
              </p>

              <div className="how-to-get-involved">
                <h3>{t("whatWeDo.expertInsights.howToGetInvolved.title")}</h3>
                <ul className="involvement-steps">
                  <li>{t("whatWeDo.expertInsights.howToGetInvolved.step1")}</li>
                  <li>{t("whatWeDo.expertInsights.howToGetInvolved.step2")}</li>
                  <li>{t("whatWeDo.expertInsights.howToGetInvolved.step3")}</li>
                  <li>{t("whatWeDo.expertInsights.howToGetInvolved.step4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
