import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;

  max-height: 300px;
  overflow-y: auto;

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1024px) {
    max-height: 500px;
  }
`;
