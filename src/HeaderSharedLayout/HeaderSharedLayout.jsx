import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, NavBar, StyledNavLink } from './HeaderSharedLayout.styled';
const HeaderSharedLayout = () => {
  return (
    <Container>
      <NavBar>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default HeaderSharedLayout;
