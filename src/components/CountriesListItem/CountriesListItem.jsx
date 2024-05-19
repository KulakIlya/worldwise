import { ListItem } from './CountriesListItem.styled';

const CountriesLIstItem = ({ flag, country }) => {
  return (
    <ListItem>
      <span>{flag}</span>
      <span>{country}</span>
    </ListItem>
  );
};
export default CountriesLIstItem;
