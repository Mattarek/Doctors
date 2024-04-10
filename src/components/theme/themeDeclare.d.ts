import "@mui/material";
import { ThemeOptions as MuiThemeOptions } from "@mui/material";

declare module "@mui/material" {
  export interface ThemeOptions extends MuiThemeOptions {}
}
