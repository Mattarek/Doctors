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
          "linear-gradient(to right, #d0cece, #6C9FE5, #6CA4F0, #6C9FE5, #d0cece)",
        height: "100vh",
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

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
