import { format } from 'date-fns';
import { useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getIdFromPathName } from '../../helpers';

import {
  selectCity,
  selectDate,
  selectFlag,
  selectNotes,
  selectPlaces,
} from '../../redux/map/selectors';

import { setCurrentPlace } from '../../redux/map/slice';
import { BackButton, Details } from './PlaceDetails.styled';

const formatDate = date => (date ? format(new Date(date), 'PPPP') : '');

const PlaceDetails = () => {
  const places = useSelector(selectPlaces);
  const city = useSelector(selectCity);
  const flag = useSelector(selectFlag);
  const date = useSelector(selectDate);
  const notes = useSelector(selectNotes);

  const location = useLocation();

  const dispatch = useDispatch();

  const id = getIdFromPathName(location.pathname);

  useEffect(() => {
    if (places.length) {
      dispatch(setCurrentPlace(places?.find(item => item.id === id)));
    }
  }, [places, id, dispatch]);

  return (
    <Details>
      <div>
        <p className="title">City name</p>
        <p className="city">
          <span className="flag">{flag}</span>
          {city}
        </p>
      </div>
      <div>
        <p className="title">You went {city} on</p>
        <p className="date">{formatDate(date)}</p>
      </div>
      {notes && (
        <div>
          <p className="title">Your notes</p>
          <p className="date">{notes}</p>
        </div>
      )}
      <div>
        <p className="title">Learn more</p>
        <a className="link" href={`https://en.wikipedia.org/wiki/${city}`} target="_blank">
          Check out {city} on Wikipedia
        </a>
      </div>
      <BackButton to="/map/cities">
        <FaArrowLeftLong /> Back
      </BackButton>
    </Details>
  );
};
export default PlaceDetails;
