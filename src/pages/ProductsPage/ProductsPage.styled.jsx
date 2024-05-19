import styled from 'styled-components';

export const Section = styled.section`
  img {
    margin: 0 auto;
    max-width: 90%;

    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    img {
      margin-bottom: 0;
    }
  }

  h2 {
    margin-bottom: 20px;
  }

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;
