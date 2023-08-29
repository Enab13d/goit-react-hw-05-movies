import styled from '@emotion/styled';
import { theme } from 'constants';
import { Link } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
  ${theme.mq[0]} {
    display: flex;
    column-gap: ${theme.sizing(4)};
  }
`;
export const ButtonLink = styled(Link)`
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  padding: ${theme.sizing(2)};
  text-align: center;
  background-color: ${theme.colors.movieCardBg};
  color: ${theme.colors.white};
  &:hover,
  &:focus {
    background-color: ${theme.colors.black};
  }
`;
export const BtnLinkWrapper = styled.ul`
  display: flex;
  column-gap: ${theme.sizing(2)};
`;
export const GoBackBtn = styled(Link)`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: ${theme.sizing(3)};
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  padding: ${theme.sizing(2)};
  text-align: center;
  background-color: ${theme.colors.movieCardBg};
  color: ${theme.colors.white};
  &:hover,
  &:focus {
    background-color: ${theme.colors.black};
  }
`;
