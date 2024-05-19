import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 30px;

  font-size: 16px;

  background-color: ${props => props.theme.colors.colorBrand2};
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorDark1};

  border-radius: 5px;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 30px;

  font-size: 16px;

  background-color: ${props => props.theme.colors.colorBrand2};
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorDark1};

  border-radius: 5px;
`;
