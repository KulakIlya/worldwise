import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  align-items: center;

  min-width: 300px;

  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;

  padding: 10px 14px;

  background-color: ${props => props.theme.colors.colorDark1};

  border-radius: 7px;
  box-shadow: 0 8px 2.4rem #242a2e80;

  span:first-child {
    font-size: 25px;
  }

  button {
    padding: 6px 12px;

    color: inherit;

    border: none;
    border-radius: 7px;

    background-color: ${props => props.theme.colors.colorDark2};
  }
`;
