import { useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { StyledButton } from "./Button.styled";

interface MuiButtonProps {
  onClick?: () => void;
  onAsyncClick?: () => Promise<void>;
}

export const MuiButton = ({ onClick, onAsyncClick }: MuiButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (onAsyncClick) {
      setLoading(true);
      try {
        await onAsyncClick();
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <StyledButton
        onClick={handleClick}
        disabled={loading}
        variant="contained"
        color="primary"
      >
        {loading ? <CircularProgress size={24} /> : "Get data"}
      </StyledButton>
    </div>
  );
};
