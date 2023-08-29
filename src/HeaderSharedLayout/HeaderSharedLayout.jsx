import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';
import { Container, NavBar, StyledNavLink } from './HeaderSharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const HeaderSharedLayout = () => {
  return (
    <Container>
      <NavBar>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </NavBar>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default HeaderSharedLayout;
