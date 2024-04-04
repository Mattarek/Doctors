import { ButtonProps } from "@mui/material/";
import { MouseEvent } from "react";

export interface MuiButtonProps extends ButtonProps {
  onAsyncClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
}
