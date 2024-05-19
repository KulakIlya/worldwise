import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  background-size: cover;
  background-position: center;

  text-align: center;
  h1 {
    font-size: 35px;
    line-height: 1.3;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 45px;
    }
  }

  p {
    font-size: 19px;
    color: ${props => props.theme.colors.colorLight1};
    margin-bottom: 25px;
  }

  a {
    display: inline-block;
    padding: 10px 30px;

    font-size: 16px;

    background-color: ${props => props.theme.colors.colorBrand2};
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorDark1};

    border-radius: 5px;
  }
`;
