import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { MuiButton } from "./components/Button/Button";
import { MouseEvent } from "react";

function App() {
  const { t } = useTranslation();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <MuiButton onAsyncClick={(e) => handleClick(e)} />
      <Languages />
      <p>{t("read-the-docs")}</p>
    </>
  );
}

export default App;
