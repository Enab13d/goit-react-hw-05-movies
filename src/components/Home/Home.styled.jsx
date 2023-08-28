import styled from "@emotion/styled";
import { theme } from 'constants';

export const MovieList = styled.ul`
  li:nth-of-type(even) {
    background-color: ${theme.colors.movieCardBg};
    color: ${theme.colors.white};
        &:hover,
    &:focus {
      background-color: black;
      cursor: pointer;
    }
  }
`

export const MovieItem = styled.li`

    padding: ${theme.sizing(1)} 0;
    padding-left: ${theme.sizing(2)};
    font-weight: 600;

    &:hover,
    &:focus {
      background-color: black;
      color: white;
      cursor: pointer;
    }

`