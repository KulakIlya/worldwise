import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectPlaces } from '../../redux/map/selectors';

const MapPlaceholder = ({ shouldRedirect = false }) => {
  const places = useSelector(selectPlaces);

  return (
    <>
      {shouldRedirect && places.length ? (
        <Navigate to="cities" />
      ) : (
        <p>👋 Add your first city by clicking on a city on the map</p>
      )}
    </>
  );
};
export default MapPlaceholder;
