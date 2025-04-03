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

  const sendConsentToBackend = (consent) => {
    // Fallback URL based on the domain where the app is running
    const apiUrl =
      window.location.hostname === "www.syrianexpertise.org"
        ? "https://api.syrianexpertise.org"
        : "https://api.seid-uk15.onrender.com"; // Use the appropriate API URL

    fetch(`${apiUrl}/api/cookie-consent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ consent }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.error("Error:", err));
  };

  const acceptAllCookies = () => {
    localStorage.setItem("cookie_consent", "all");
    sendConsentToBackend("all");
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
