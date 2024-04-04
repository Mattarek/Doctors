import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Languages />
      <p>{t("translation.read-the-docs")}</p>
    </>
  );
}

export default App;
