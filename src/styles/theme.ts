import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "rgba(30, 186, 184, 1)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7950DE",
      contrastText: "#ffffff",
    },
  },
});
