import { useSelector } from 'react-redux';

import CitiesListItem from '../CitiesListItem';

import { selectPlaces } from '../../redux/map/selectors';

import MapPlaceholder from '../MapPlaceholder';
import { List } from './CitiesList.styled';

const CitiesList = () => {
  const places = useSelector(selectPlaces);

  return (
    <>
      {places.length ? (
        <List>
          {places.map(item => (
            <CitiesListItem key={[item.city, item.coords].toString()} place={item} /> //"October 31, 2027"
          ))}
        </List>
      ) : (
        <MapPlaceholder />
      )}
    </>
  );
};
export default CitiesList;
