import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  /* justify-content: space-between; */

  align-items: center;

  padding: 10px;

  background-color: ${props => props.theme.colors.colorDark2};

  border-radius: 7px;
  border-left: 5px solid ${props => props.theme.colors.colorBrand2};

  &:has(.active) {
    border-top: 1px solid ${props => props.theme.colors.colorBrand2};
    border-right: 1px solid ${props => props.theme.colors.colorBrand2};
    border-bottom: 1px solid ${props => props.theme.colors.colorBrand2};
  }
`;

export const ItemLink = styled(NavLink)`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  text-decoration: none;

  color: inherit;

  &.active {
    color: inherit;
  }
`;

export const DeleteButton = styled.button`
  padding: 0;
  margin-left: 10px;

  background-color: transparent;
  border: none;

  height: 16px;

  color: ${props => props.theme.colors.colorLight3};
`;
