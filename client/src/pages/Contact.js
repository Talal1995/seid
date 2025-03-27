// Contact.js
import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/whatWeDo.css";
import contactUs from "../assets/contact-us.jpeg";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="what-we-do-page">
      <div className="container">
        <h1 className="main-title">{t("contact.pageTitle")}</h1>

        <div className="program-section">
          <div className="program-content">
            <div className="program-image">
              {/* Add an appropriate contact image here */}
              <img src={contactUs} alt="Contact Us" loading="lazy" />
            </div>

            <div className="program-details">
              <h2 className="program-title">{t("contact.sectionTitle")}</h2>
              <p className="program-description">{t("contact.message")}</p>

              <div className="how-to-get-involved">
                <h3>{t("contact.getInTouchTitle")}</h3>
                <ul className="involvement-steps">
                  <li>
                    {t("contact.email")}:{" "}
                    <strong>contact@ourwebsite.com</strong>
                  </li>
                  <li>
                    {t("contact.phone")}: <strong>+1 (555) 123-4567</strong>
                  </li>
                  <li>
                    {t("contact.address")}:{" "}
                    <strong>{t("contact.addressDetails")}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
