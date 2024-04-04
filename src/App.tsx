import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { MuiButton } from "./components/Button/Button";
import { MouseEvent, useState } from "react";

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

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
        color="primary"
        variant="contained"
        onAsyncClick={(e) => handleClick(e)}
        loading={loading}
        setLoading={setLoading}
      />
      <Languages />
      <p>{t("read-the-docs")}</p>
    </>
  );
}

export default App;
