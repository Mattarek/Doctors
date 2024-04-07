import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { MuiButton } from "./components/Button/MuiButton";
import { MouseEvent, useState } from "react";

function App() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <MuiButton
        variant="contained"
        onAsyncClick={(e) => handleClick(e)}
        isSubmitting={isSubmitting}
        sx={{ position: "relative" }}
      >
        {t("buttonGetData")}
      </MuiButton>
      <Languages />
    </>
  );
}

export default App;
