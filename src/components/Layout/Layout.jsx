import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import {
  AppContainer,
  NavContainer,
  NavLinkStyled,
  Loader,
} from './Layout.styled';

const Layout = () => {
  return (
    <AppContainer>
      <NavContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/moviespage">Movies</NavLinkStyled>
      </NavContainer>
      <Suspense
        fallback={
          <Loader role="alert">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="250"
              visible={true}
            />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};
export default Layout;
