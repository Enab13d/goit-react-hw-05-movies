import styled from "@emotion/styled";
import { theme } from "constants";


export const SearchBtn = styled.button`
display: inline-block;
width: ${theme.sizing(12)};
height: ${theme.sizing(12)};
border: 0;
background-image: url('https://cdn3.iconfinder.com/data/icons/feather-5/24/search-1024.png');
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
&:hover {
    opacity: 1;
}
`;

export const SearchInput = styled.input`
display: inline-block;
width: 100%;
font: inherit;
font-size: ${theme.sizing(5)};
border: none;
outline: none;
padding-left: ${theme.sizing(1)};
padding-right: ${theme.sizing(1)};
::placeholder {
    font: inherit;
    font-size: 18px;
  }
`
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`