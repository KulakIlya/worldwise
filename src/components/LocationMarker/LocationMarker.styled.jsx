import { Popup } from 'react-leaflet';
import styled from 'styled-components';

export const CustomPopup = styled(Popup)`
  a,
  button {
    text-decoration: none;
    color: ${props => props.theme.colors.colorLight3} !important;

    display: flex;
    align-items: center;
    gap: 12px;

    border: none;
    background-color: transparent;
    font-size: inherit;
  }
`;
