import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/policy.css";

const GDPRPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    document.body.style.fontFamily = isRTL
      ? "Markazi Text, serif"
      : "Open Sans, sans-serif";
  }, [direction, isRTL]);

  return (
    <div className="policy-container" dir={direction}>
      <div className="policy-content">
        <h1 className="survey-title">{t("gdpr.title")}</h1>
        <p className="policy-date">{t("gdpr.lastUpdated")}: April 3, 2025</p>

        <section className="policy-section">
          <h2>{t("gdpr.introduction.title")}</h2>
          <p>{t("gdpr.introduction.content1")}</p>
          <p>{t("gdpr.introduction.content2")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataController.title")}</h2>
          <p>{t("gdpr.dataController.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataCollected.title")}</h2>
          <p>{t("gdpr.dataCollected.intro")}</p>
          <h3>{t("gdpr.dataCollected.personalData.title")}</h3>
          <p>{t("gdpr.dataCollected.personalData.content")}</p>
          <h3>{t("gdpr.dataCollected.surveyData.title")}</h3>
          <p>{t("gdpr.dataCollected.surveyData.content")}</p>
          <h3>{t("gdpr.dataCollected.technicalData.title")}</h3>
          <p>{t("gdpr.dataCollected.technicalData.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.legalBasis.title")}</h2>
          <p>{t("gdpr.legalBasis.content1")}</p>
          <p>{t("gdpr.legalBasis.content2")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataPurpose.title")}</h2>
          <p>{t("gdpr.dataPurpose.content")}</p>
          <ul>
            <li>{t("gdpr.dataPurpose.purpose1")}</li>
            <li>{t("gdpr.dataPurpose.purpose2")}</li>
            <li>{t("gdpr.dataPurpose.purpose3")}</li>
            <li>{t("gdpr.dataPurpose.purpose4")}</li>
            <li>{t("gdpr.dataPurpose.purpose5")}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataRetention.title")}</h2>
          <p>{t("gdpr.dataRetention.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataSharing.title")}</h2>
          <p>{t("gdpr.dataSharing.content1")}</p>
          <p>{t("gdpr.dataSharing.content2")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.dataSecurity.title")}</h2>
          <p>{t("gdpr.dataSecurity.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.userRights.title")}</h2>
          <p>{t("gdpr.userRights.intro")}</p>
          <ul>
            <li>{t("gdpr.userRights.right1")}</li>
            <li>{t("gdpr.userRights.right2")}</li>
            <li>{t("gdpr.userRights.right3")}</li>
            <li>{t("gdpr.userRights.right4")}</li>
            <li>{t("gdpr.userRights.right5")}</li>
            <li>{t("gdpr.userRights.right6")}</li>
            <li>{t("gdpr.userRights.right7")}</li>
          </ul>
          <p>{t("gdpr.userRights.exerciseRights")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.internationalTransfers.title")}</h2>
          <p>{t("gdpr.internationalTransfers.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.changes.title")}</h2>
          <p>{t("gdpr.changes.content")}</p>
        </section>

        <section className="policy-section">
          <h2>{t("gdpr.contact.title")}</h2>
          <p>{t("gdpr.contact.content")}</p>
        </section>
      </div>
    </div>
  );
};

export default GDPRPolicy;
