import styled from 'styled-components';

export const Section = styled.section`
  div {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    div {
      margin-bottom: 0;
    }
  }

  h2 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 19px;
    }
  }

  img {
    margin: 0 auto;
    max-width: 90%;
  }
`;
