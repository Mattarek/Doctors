import { ButtonProps } from "@mui/material/";
import { MouseEvent } from "react";

export interface Button extends ButtonProps {
  onAsyncClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isSubmitting?: boolean;
  loading: boolean;
  disabled: boolean;
}
