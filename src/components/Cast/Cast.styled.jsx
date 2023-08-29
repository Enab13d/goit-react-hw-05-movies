import styled from "@emotion/styled";
import { theme } from "constants";

export const CastList = styled.ul`
  ${theme.mq[0]} {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    column-gap: ${theme.sizing(2)};
  }

`
export const Placeholder = styled.div`
background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);
    width: 100%;
    height: 100%;
    background-color: black;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
export const Thumb = styled.div`
      width: 100%;
      height: 270px;

`
export const ActorCard = styled.li`
      width: 180px;


`
