import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { MuiButton } from "./components/Button/Button";

function App() {
  const { t } = useTranslation();

  const handleClick = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <MuiButton onAsyncClick={handleClick} />
      <Languages />
      <p>{t("read-the-docs")}</p>
    </>
  );
}

export default App;
