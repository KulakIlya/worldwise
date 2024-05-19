import styled from 'styled-components';

import { StyledButton } from '../../components/Button/Button.styled';

export const CurrentPositionButton = styled(StyledButton)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  font-size: 12px;
`;
