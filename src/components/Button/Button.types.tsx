import { ButtonProps as ButtonMuiProps } from "@mui/material/";
import { MouseEvent } from "react";

export interface ButtonProps extends ButtonMuiProps {
  onAsyncClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void | unknown>;
  isSubmitting?: boolean;
}
