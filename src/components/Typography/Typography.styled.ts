import { Typography } from "@mui/material/";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  &&.MuiTypography-root {
    text-align: center;
    font-size: 1.75rem;
    padding: 2rem;
    font-weight: 500;

    @media (max-width: 361px) {
      font-size: 1rem;
    }
  }
`;
