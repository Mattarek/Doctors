import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  TextField,
} from "@mui/material";
import { theme } from "./styles/theme";
import { Button } from "./components/Button/Button";
import { LoginLayout } from "./layouts/loginLayout";
import { Languages } from "./components/languages/Languages";

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
        <CssBaseline />
        <LoginLayout title="Zaloguj się">
          <TextField label="Name" variant="outlined" />
          <TextField label="Surname" variant="outlined" />
          <Button variant="contained" color="info" onAsyncClick={handleClick}>
            {t("buttonGetData")}
          </Button>
          <Languages />
        </LoginLayout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
