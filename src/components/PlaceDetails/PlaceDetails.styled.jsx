import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 11px;
  padding: 20px 30px;

  width: 100%;

  background-color: ${props => props.theme.colors.colorDark2};

  border-radius: 7px;

  .title {
    font-weight: 700;
    margin-bottom: 7px;
    text-transform: uppercase;

    color: ${props => props.theme.colors.colorLight1};
  }

  .city {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 19px;

    .flag {
      font-size: 32px;
    }
  }

  .date,
  .link {
    font-size: 16px;
  }

  .link {
    color: ${props => props.theme.colors.colorBrand1};
  }
`;

export const BackButton = styled(NavLink)`
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 5px;

  background-color: transparent;

  border: none;
  color: ${props => props.theme.colors.colorLight2};
  text-transform: uppercase;
  text-decoration: none;

  font-size: 15px;
  font-weight: 600;

  max-width: 92px;

  border: 1px solid currentColor;
  border-radius: 5px;

  &.active {
    color: ${props => props.theme.colors.colorLight2};
  }
`;
