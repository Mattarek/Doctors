import { Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LoginProps {
  children: ReactNode;
  title: string;
}

export const LoginLayout = ({ children, title }: LoginProps) => {
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
          justifyContent: "center",
          width: "35vw",
          minHeight: "45vh",
          borderRadius: "5%",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "1.75rem",
            padding: "2rem",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Box>{children}</Box>
      </Paper>
    </Box>
  );
};
