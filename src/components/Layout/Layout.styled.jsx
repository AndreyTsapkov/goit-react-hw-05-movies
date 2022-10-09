import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  min-height: 100vh;
  font-size: 40px;
  padding: 40px;
`;

export const NavContainer = styled.div`
  padding: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;

  &:first-of-type {
    margin-right: 30px;
  }

  &.active {
    text-decoration: underline;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
