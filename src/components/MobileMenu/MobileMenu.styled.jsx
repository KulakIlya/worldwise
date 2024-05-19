import styled from 'styled-components';

export const MenuContainer = styled.div`
  transition: all 250ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  transform: ${props => (props.$isOpened ? `translateX(0)` : `translateX(100%)`)};

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  ul {
    font-size: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  border: none;
  background-color: transparent;

  font-size: 27px;

  color: ${props => props.theme.colors.colorLight2};
`;
