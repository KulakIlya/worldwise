import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    display: grid;

    grid-template-columns: 400px 1fr;
  }

  @media screen and (min-width: 1440px) {
    display: grid;

    grid-template-columns: 560px 1fr;
  }
`;

export const LeftSide = styled.div`
  position: absolute;
  z-index: 9999;

  transform: ${props => (props.$isOpened ? 'translateX(0)' : 'translateX(100%)')};

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 50px 35px;

  background-color: ${props => props.theme.colors.colorDark1};

  transition: all 250ms ease-in-out;

  @media screen and (min-width: 1024px) {
    transform: translate(0);
    width: auto;
    z-index: auto;
    position: static;
  }

  .info {
    margin-top: auto;
    position: static;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  border-radius: 7px;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.colorDark2};

  a {
    display: block;
    color: ${props => props.theme.colors.colorLight2};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 5px;

    &.active {
      background-color: ${props => props.theme.colors.colorDark0};
      color: ${props => props.theme.colors.colorBrand2};
    }
  }
`;

export const CopyRight = styled.p`
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    margin-top: auto;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.colorLight2};

  font-size: 25px;

  position: absolute;
  top: 20px;
  right: 20px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const OpenButton = styled(CloseButton)`
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;

  color: ${props => props.theme.colors.colorDark1};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  position: relative;
  .info {
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }
`;
