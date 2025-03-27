// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import App from "./App";

// Initialize i18next with language detector and translation resources
i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: require("./locales/en/translation.json"),
      },
      ar: {
        translation: require("./locales/ar/translation.json"),
      },
    },
    supportedLngs: ["en", "ar"], // Supported languages
    fallbackLng: "ar", // Fallback language if detection fails
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
      cookieMinutes: 10,
      cookieDomain: "myDomain",
      htmlTag: document.documentElement,
      cookieOptions: { path: "/", sameSite: "strict" },
      convertDetectedLanguage: (lng) => lng.replace("-", "_"),
    },
  })
  .then(() => {
    // Render the app with BrowserRouter wrapping the app component
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    );
  });
