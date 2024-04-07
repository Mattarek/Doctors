import { MouseEvent, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { MuiButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

export const MuiButton = ({
  onClick,
  onAsyncClick,
  isSubmitting,
  children,
  ...props
}: MuiButtonProps) => {
  const [loading, setLoading] = useState(false);

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

  console.log(children);
  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading || isSubmitting}
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
