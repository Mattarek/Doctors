import { createTheme } from "@mui/material";
import { DefaultTheme } from "./theme";

export const theme: DefaultTheme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#056a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },

  test: {
    test: "#qweasdqwe",
  },
});
