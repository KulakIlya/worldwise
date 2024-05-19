import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex-basis: calc((100% - 16px) / 2);

  padding: 10px 20px;

  font-size: 17px;

  background-color: ${props => props.theme.colors.colorDark2};

  border-radius: 7px;
  border-left: 5px solid ${props => props.theme.colors.colorBrand1};

  text-align: center;

  span:first-child {
    font-size: 30px;
  }
`;
