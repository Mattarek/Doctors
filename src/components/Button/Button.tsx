import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledButton } from "./Button.styled";
import { MuiButtonProps } from "./Button.types";

export const MuiButton = ({
  onClick,
  onAsyncClick,
  variant,
  color,
  loading,
  text,
  ...props
}: MuiButtonProps) => {
  const { t } = useTranslation();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (onAsyncClick) {
      try {
        await onAsyncClick(e);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  console.log(text);
  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading}
      variant={variant}
      color={color}
      style={{ position: "relative" }}
      {...props}
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

      {t(text)}
    </StyledButton>
  );
};
