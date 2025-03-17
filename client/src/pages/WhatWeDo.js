import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages.css"; // Ensure your styles are properly defined

const WhatWeDo = () => {
  const { t, i18n } = useTranslation(); // Get i18n object to access current language

  // Determine the text direction based on language
  const isRTL = i18n.language === "ar"; // "ar" for Arabic, adjust based on your language code
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <div className="page flex items-center justify-center min-h-screen p-6">
      <div
        className="page-container max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-2xl p-8 text-gray-800"
        dir={direction} // Set direction dynamically
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 uppercase tracking-wide">
          {t("whatWeDo.innovationAndInitiatives.title")}
        </h2>

        <div className="space-y-6 text-left">
          <section>
            <p className="text-2xl font-semibold text-gray-700">
              {t("whatWeDo.innovationAndInitiatives.description")}
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              {t("whatWeDo.innovationAndInitiatives.howToGetInvolved.title")}
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                {t("whatWeDo.innovationAndInitiatives.howToGetInvolved.step1")}
              </li>
              <li>
                {t("whatWeDo.innovationAndInitiatives.howToGetInvolved.step2")}
              </li>
              <li>
                {t("whatWeDo.innovationAndInitiatives.howToGetInvolved.step3")}
              </li>
              <li>
                {t("whatWeDo.innovationAndInitiatives.howToGetInvolved.step4")}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              {t("whatWeDo.syrianExpertiseHub.title")}
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              {t("whatWeDo.syrianExpertiseHub.description")}
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              {t("whatWeDo.syrianExpertiseHub.howToGetInvolved.title")}
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>{t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step1")}</li>
              <li>{t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step2")}</li>
              <li>{t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step3")}</li>
              <li>{t("whatWeDo.syrianExpertiseHub.howToGetInvolved.step4")}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              {t("whatWeDo.expertInsights.title")}
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              {t("whatWeDo.expertInsights.description")}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <h4 className="mt-4 font-semibold text-gray-800">
                {t("whatWeDo.expertInsights.howToGetInvolved.title")}
              </h4>
              <li>{t("whatWeDo.expertInsights.howToGetInvolved.step1")}</li>
              <li>{t("whatWeDo.expertInsights.howToGetInvolved.step2")}</li>
              <li>{t("whatWeDo.expertInsights.howToGetInvolved.step3")}</li>
              <li>{t("whatWeDo.expertInsights.howToGetInvolved.step4")}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
