import styled from "@emotion/styled";
import { theme } from "constants";

export const CastList = styled.ul`
  ${theme.mq[0]} {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: ${theme.sizing(2)};
  }

`