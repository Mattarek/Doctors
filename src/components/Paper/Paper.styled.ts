import { Paper } from "@mui/material/";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  width: "35vw";
  border-radius: "5%";
  min-height: "45vh";
  justify-content: "center";
  @media (max-width: 360px) {
    min-width: 65vw;
  }
  @media (max-width: 440px) {
    min-width: 55vw;
  }
`;
