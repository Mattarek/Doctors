import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";

import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <Languages />
      <p>{t("translation.read-the-docs")}</p>
    </>
  );
}

export default App;
