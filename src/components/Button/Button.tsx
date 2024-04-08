import { MouseEvent, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  onClick,
  onAsyncClick,
  isSubmitting,
  children,
  disabled,
  ...props
}: ButtonProps) => {
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

  return (
    <StyledButton
      onClick={handleClick}
      disabled={disabled || isSubmitting || loading}
      {...props}
    >
      {(isSubmitting ||  loading) && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              zIndex: 1,
            }}
          />
        ))}
      {children}
    </StyledButton>
  );
};
