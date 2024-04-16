import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

interface LoginProps {
  children: ReactNode;
  title: string;
}

export const Login = ({ children, title }: LoginProps) => {
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
        <h2>{title}</h2>
        {children}
      </Paper>
    </Box>
  );
};
