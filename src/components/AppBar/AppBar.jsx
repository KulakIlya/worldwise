import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import MobileMenu from '../MobileMenu/MobileMenu';

import { AppBarLink, AppHeader, NavList, NavMenuButton } from './AppBar.styled';

const AppBar = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const location = useLocation();

  const onOpenModal = () => {
    setIsModalOpened(true);
  };

  const onCloseModal = () => {
    setIsModalOpened(false);
  };

  useEffect(() => {
    setIsModalOpened(false);
  }, [location]);

  return (
    <>
      <AppHeader>
        <nav>
          <Link to="/">
            <img src={logoImg} alt="Worldwise logo" width="218" />
          </Link>
          <div>
            <NavList>
              <li>
                <AppBarLink to="/pricing">Pricing</AppBarLink>
              </li>
              <li>
                <AppBarLink to="/products">Products</AppBarLink>
              </li>
              <li>
                <AppBarLink to="register">Register</AppBarLink>
              </li>
              <li>
                <AppBarLink to="login">Login</AppBarLink>
              </li>
            </NavList>
            <NavMenuButton onClick={onOpenModal}>
              <CiMenuBurger />
            </NavMenuButton>
          </div>
        </nav>
      </AppHeader>
      {createPortal(
        <MobileMenu isOpened={isModalOpened} onCloseModal={onCloseModal} />,
        document.querySelector('#menu-modal')
      )}
    </>
  );
};
export default AppBar;
