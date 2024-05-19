import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { CloseButton, MenuContainer } from './MobileMenu.styled';

const MobileMenu = ({ isOpened, onCloseModal }) => {
  return (
    <MenuContainer $isOpened={isOpened}>
      <CloseButton onClick={onCloseModal} type="button">
        <IoMdClose />
      </CloseButton>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
};
export default MobileMenu;
