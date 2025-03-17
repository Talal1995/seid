import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import "../styles/pages.css"; // Ensure your styles are properly defined

const About = () => {
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
          {t("about.whoWeAre.title")}
        </h2>

        <div className="space-y-6 text-left">
          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              {t("about.whoWeAre.namesOfVariables")}
            </h3>
            <h4 className="text-2xl font-semibold text-gray-700">
              {t("about.whoWeAre.visionTitle")}
            </h4>
            <p className="text-lg text-gray-700">
              {t("about.whoWeAre.vision")}
            </p>
            <h4 className="text-2xl font-semibold text-gray-700">
              {t("about.whoWeAre.missionTitle")}
            </h4>
            <p className="text-lg text-gray-700">
              {t("about.whoWeAre.mission")}
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-center mb-6 text-blue-600 uppercase tracking-wide">
              {t("about.ourStory.title")}
            </h3>
            <p className="text-lg text-gray-700">{t("about.ourStory.part1")}</p>
            <p className="mt-2 text-lg text-gray-700">
              {t("about.ourStory.part2")}
            </p>
            <h3 className="text-2xl font-semibold text-gray-700 mt-4">
              {t("about.ourStory.unifyingQuestion")}
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              {t("about.ourStory.part3")}
            </p>
            <p className="mt-2 text-lg text-gray-700">
              {t("about.ourStory.howWeStarted")}
            </p>
          </section>

          <section>
            <p className="text-3xl font-bold text-center mb-6 text-blue-600 uppercase tracking-wide">
              {t("about.ourTeam.description")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
