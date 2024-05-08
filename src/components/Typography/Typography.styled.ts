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
    @media (min-width: 362px) {
      font-size: 1.75rem;
    }
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
    @media (min-width: 1080px) {
      font-size: 2.5rem;
    }
  }
`;
