import styled from '@emotion/styled';
import { theme } from 'constants';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 0 ${theme.sizing(3)};
  width: 100%;
  ${theme.mq[0]}: {
    width: 768px;
  }
  ${theme.mq[1]}: {
    width: 1440px;
  }
`;
export const NavBar = styled.nav`
  padding: ${theme.sizing(2)};
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: ${theme.sizing(2)};
  margin-bottom: ${theme.sizing(3)};
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  &.active {
    color: ${theme.colors.red};
  }
`;
