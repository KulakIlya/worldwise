import { useSelector } from 'react-redux';

import CountriesListItem from '../CountriesListItem';

import { selectUniqueCountries } from '../../redux/map/selectors';

import MapPlaceholder from '../MapPlaceholder';
import { List } from './CountriesList.styled';

const CountriesList = () => {
  const uniquePlaces = useSelector(selectUniqueCountries);

  return (
    <>
      {uniquePlaces.length ? (
        <List>
          {uniquePlaces.map(({ flag, country, coords }) => (
            <CountriesListItem key={coords} flag={flag} country={country} />
          ))}
        </List>
      ) : (
        <MapPlaceholder />
      )}
    </>
  );
};
export default CountriesList;
