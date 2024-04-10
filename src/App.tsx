import { useTranslation } from "react-i18next";
import { Languages } from "./components/languages/Languages";
import { Button } from "./components/Button/Button";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider as MuiThemeProvider,
  TextField,
} from "@mui/material";
import { theme } from "./styles/theme";
import { Layout } from "./layout/Layout";

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
        <Layout>
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
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
