// Contact.js

import React from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import "../styles/pages.css"; // Import the new styles

const Contact = () => {
  const { t } = useTranslation(); // Use the translation hook to get translated content

  return (
    <div className="page">
      <div className="page-container">
        <h2>{t("contact Us")}</h2> {/* Translatable text */}
        <p>
          {t("contact Message")} <strong>contact@ourwebsite.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Contact;
