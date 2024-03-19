import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import styled from "styled-components";

interface StyledMenuItemProps extends MenuItemProps {
  active?: string | null;
}
export const StyledButton = styled(Button)`
  position: relative; /* Wymagane, aby skonfigurować pozycję dla ikony */
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: none;
  background: none;
  overflow: hidden; /* Ukryj wszystko, co jest poza granicami przycisku */
`;

export const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>`
  ${({ active }) =>
    active &&
    `
  border-right: 3px solid blue;
`}
`;
