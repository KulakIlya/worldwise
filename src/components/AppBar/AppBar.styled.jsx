import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppHeader = styled.header`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: transparent;

  padding: 25px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 30px;
    a {
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export const AppBarLink = styled(NavLink)`
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.colorBrand2};
  }
`;

export const NavMenuButton = styled.button`
  font-size: 27px;
  background-color: transparent;
  border: none;

  color: ${props => props.theme.colors.colorLight2};
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
