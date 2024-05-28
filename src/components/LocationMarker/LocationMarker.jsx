import { Marker } from 'react-leaflet';
import { NavLink } from 'react-router-dom';

import { CustomPopup } from './LocationMarker.styled';

const LocationMarker = ({ place: { coords, flag, city, id }, hasID = false, onLeftSideOpen }) => {
  return (
    <Marker position={coords}>
      <CustomPopup>
        {hasID ? (
          <NavLink to={`cities/${id}`} onClick={onLeftSideOpen}>
            <span className="flag">{flag}</span> <span>{city}</span>
          </NavLink>
        ) : (
          <button type="button" onClick={onLeftSideOpen}>
            <span className="flag">{flag}</span> <span>{city}</span>
          </button>
        )}
      </CustomPopup>
    </Marker>
  );
};
export default LocationMarker;
