import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 8px 12px;

    margin-top: 5px;
    display: block;

    border: none;
    border-radius: 5px;

    background-color: ${props => props.theme.colors.colorLight3};

    transition: all 150ms ease-in-out;

    &:focus-within {
      outline: 3px solid ${props => props.theme.colors.colorBrand2};
    }
  }
`;
