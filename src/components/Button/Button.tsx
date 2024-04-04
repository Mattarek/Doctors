import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledButton } from "./Button.styled";
import { MuiButtonProps } from "./Button.types";

export const MuiButton = ({ onClick, onAsyncClick }: MuiButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (onAsyncClick) {
      setLoading(true);
      try {
        await onAsyncClick(e);
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading}
      variant="contained"
      color="primary"
      style={{ position: "relative" }}
    >
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            zIndex: 1,
          }}
        />
      )}
      {t("buttonGetData")}
    </StyledButton>
  );
};
