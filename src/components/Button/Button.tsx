import { MouseEvent } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Button as ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  onClick,
  onAsyncClick,
  isSubmitting,
  children,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
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

  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading || isSubmitting || disabled}
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
      {children}
    </StyledButton>
  );
};
