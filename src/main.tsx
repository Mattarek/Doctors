import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import "./index.css";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "PL",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    PL: {
      translation: {
        welcome: "Witam",
      },
    },
    US: {
      translation: {
        welcome: "Welcome",
      },
    },
    DE: {
      translation: {
        welcome: "Willkommen",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
