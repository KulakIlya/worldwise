import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  input,
  textarea {
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 5px;

    color: ${props => props.theme.colors.colorLight3};

    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.colorLight3};

    text-decoration: none;
  }
`;

export const Wrapper = styled.span`
  position: relative;
`;

export const Flag = styled.span`
  font-size: 24px;
  position: absolute;
  bottom: 5%;
  right: 10px;
`;
