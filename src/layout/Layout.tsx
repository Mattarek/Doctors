import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgba(53,42,245,1) 0%, rgba(21,129,181,1) 25%, rgba(30,186,184,1) 49%, rgba(21,129,181,1) 75%, rgba(53,42,245,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "8px solid black",

          width: "35vw",
          minHeight: "45vh",
          borderRadius: "5%",
          minWidth: "fit-content",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
