import { Marker } from 'react-leaflet';
import { CustomPopup } from './LocationMarker.styled';

const LocationMarker = ({ place: { coords, flag, city } }) => {
  return (
    <Marker position={coords}>
      <CustomPopup>
        <span className="flag">{flag}</span> <span>{city}</span>
      </CustomPopup>
    </Marker>
  );
};
export default LocationMarker;
