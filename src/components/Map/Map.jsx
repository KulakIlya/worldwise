import { useEffect } from 'react';
import { TileLayer, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

import { getCurrentPlace, getUserPlaces } from '../../redux/map/operations';
import { selectCoords, selectPlace, selectPlaces } from '../../redux/map/selectors';

import LocationButton from '../LocationButton/LocationButton';
import LocationMarker from '../LocationMarker';
import Markers from '../Markers/';

import { debounce } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MapWrapper } from './Map.styled';

const showError = message => toast.error(message);

const ChangeCenter = ({ center, onZoomChange }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onMapClick = debounce(e => {
    if (e.originalEvent.target.tagName === 'BUTTON') return;

    map.setView([e.latlng.lat, e.latlng.lng]);

    dispatch(getCurrentPlace(e.latlng))
      .unwrap()
      .then(() =>
        navigate(`/map?${createSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng }).toString()}`)
      )
      .catch(() => {
        showError("👋 That doesn't seem to be a city. Click somewhere else 😉");
      });
  }, 100);

  const map = useMapEvents({
    click: onMapClick,
    zoomend: () => {
      onZoomChange(map.getZoom());
    },
  });

  if (center) map.setView(center);

  return null;
};

const Map = () => {
  const [getConfig, changeConfig] = useLocalStorage();

  const handleZoomChange = newValue => changeConfig('zoom', newValue);

  const [searchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const currentPlace = useSelector(selectPlace);
  const currentCoords = useSelector(selectCoords);
  const places = useSelector(selectPlaces);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (lat && lng) dispatch(getCurrentPlace({ lat, lng }));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MapWrapper center={[51.505, -0.09]} zoom={getConfig('zoom') ?? 13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers places={places} />
        {currentPlace && <LocationMarker place={currentPlace} />}
        <LocationButton />
        <ChangeCenter center={currentCoords} onZoomChange={handleZoomChange} />
      </MapWrapper>
      <ToastContainer position="top-center" newestOnTop style={{ fontSize: '12px' }} />
    </>
  );
};

export default Map;
