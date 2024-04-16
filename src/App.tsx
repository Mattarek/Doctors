import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { Login } from "./layouts/Login";

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
        <Login title="Zaloguj się">
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "50%",
              margin: "0 auto",
            }}
          >
            <TextField label="Name" variant="outlined" />
            <TextField label="Surname" variant="outlined" />
            <Button variant="contained" color="info" onAsyncClick={handleClick}>
              {t("buttonGetData")}
            </Button>
            <Languages />
          </Box> */}
        </Login>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
