// index.js

import React from "react";
import ReactDOM from "react-dom/client"; // import from react-dom/client
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
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
        translation: require("./locales/fr/translation.json"),
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
      lookupQuerystring: "lng", // Query parameter (e.g., ?lng=fr)
      lookupCookie: "i18next", // Cookie name for storing language
      lookupLocalStorage: "i18nextLng", // LocalStorage key for storing language
      lookupSessionStorage: "i18nextLng", // SessionStorage key for storing language
      caches: ["localStorage", "cookie"], // Where to store detected language
      cookieMinutes: 10, // Expiry time for cookies in minutes
      cookieDomain: "myDomain", // Optional cookie domain
      htmlTag: document.documentElement, // Set HTML lang attribute
      cookieOptions: { path: "/", sameSite: "strict" },
      convertDetectedLanguage: (lng) => lng.replace("-", "_"), // Optional language conversion
    },
  })
  .then(() => {
    // Render your app with BrowserRouter wrapping the app component
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    );
  });
