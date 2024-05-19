import { useState } from 'react';
import { useMap } from 'react-leaflet';

import { useDispatch } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCurrentPlace } from '../../redux/map/operations';
import { CurrentPositionButton } from './LocationButton.styled';

const LocationButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const map = useMap();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showError = message => toast.error(message);

  const handleButtonClick = () => {
    setIsLoading(true);
    map
      .locate()
      .on('locationfound', e => {
        map.setView(e.latlng);
        setIsLoading(false);

        dispatch(getCurrentPlace(e.latlng))
          .unwrap()
          .then(() =>
            navigate(
              `/map?${createSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng }).toString()}`
            )
          );
      })
      .on('locationerror', e => {
        showError(e.message);
        setIsLoading(false);
      });
  };

  return (
    <CurrentPositionButton type="button" onClick={handleButtonClick}>
      {isLoading && 'Loading...'}
      {!isLoading && 'Use your position'}
    </CurrentPositionButton>
  );
};
export default LocationButton;
