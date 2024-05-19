import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.colorDark0};

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
