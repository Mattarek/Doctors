import { Button } from "@mui/material/";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  variant: ${({ variant }) => variant};
  color: ${({ color }) => color};
  width: 150px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
