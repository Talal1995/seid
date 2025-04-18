import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cookieConsent.css";

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const sendConsentToBackend = (consentData) => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://seid-uk15.onrender.com"
        : "http://localhost:5001";

    fetch(`${apiUrl}/api/cookie-consent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Important for cookies/sessions
      body: JSON.stringify(consentData), // Send the full consentData object
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Consent saved:", data.message))
      .catch((err) => {
        console.error("Error saving consent:", err);
        // Save consent locally even if server request fails
        localStorage.setItem("cookie_consent", JSON.stringify(consentData));
      });
  };

  const acceptAllCookies = () => {
    const consentData = {
      consent: "all",
      timestamp: new Date().toISOString(),
      language: i18n.language,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consentData));
    sendConsentToBackend(consentData);
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent-container" dir={direction}>
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <h3>{t("cookieConsent.settings")}</h3>
          <p>{t("cookieConsent.description")}</p>
        </div>
        <div className="cookie-consent-buttons">
          <button className="cookie-button primary" onClick={acceptAllCookies}>
            {t("cookieConsent.acceptAll")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
