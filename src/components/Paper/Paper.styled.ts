import { Paper } from "@mui/material/";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  width: 35vw;
  border-radius: 5%;
  min-height: 45vh;
  justify-content: "center";
  @media (min-width: 0px) {
    min-width: 65vw;
    border-radius: 25%;
  }
  @media (min-width: 361px) {
    min-width: 55vw;
    border-radius: 10%;
  }
`;
