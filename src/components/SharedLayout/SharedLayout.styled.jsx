import styled from 'styled-components';

import backgroundImage from '../../assets/bg.jpg';

export const Wrapper = styled.div`
  /* ${props => props.isBlurred && `filter: blur(0spx)`} */
`;

export const MainContent = styled.main`
  /* ${props => props.$hasBackgroundImage && `height: 100vh;`} */
  min-height: 100vh;
  padding-top: 100px;
  background-color: ${props => props.theme.colors.colorDark1};
  ${props =>
    props.$hasBackgroundImage &&
    `background-image: linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),
    url(${backgroundImage});`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h2 {
    font-size: 40px;
  }
`;
