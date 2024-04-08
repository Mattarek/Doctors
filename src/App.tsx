import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { Button } from "./components/Button/Button";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onAsyncClick={handleClick}
        isSubmitting={isSubmitting}
        loading={loading}
        disabled={disabled}
      >
        {t("buttonGetData")}
      </Button>
      <Languages />
    </>
  );
}

export default App;
