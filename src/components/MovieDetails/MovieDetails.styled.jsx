import styled from "@emotion/styled";
import { theme } from "constants";

export const MovieCardWrapper = styled.div`

  ${theme.mq[0]} {
    display: flex;
    column-gap: ${theme.sizing(4)};
  }
`