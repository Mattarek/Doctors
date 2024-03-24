import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export default i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pl: {
      translation: {
        welcome: "Witam",
      },
    },
    en: {
      translation: {
        welcome: "Welcome",
      },
    },
    de: {
      translation: {
        welcome: "Willkommen",
      },
    },
  },
});
