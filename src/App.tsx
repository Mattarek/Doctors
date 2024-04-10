import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { Button } from "./components/Button/Button";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

function App() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onAsyncClick={handleClick}
          isSubmitting={isSubmitting}
          disabled={disabled}
        >
          <p>{t("buttonGetData")}</p>
        </Button>

        <Languages />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
