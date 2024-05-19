import { format } from 'date-fns';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import { removePlace } from '../../redux/map/operations';

import { DeleteButton, ItemLink, ListItem } from './CitiesListItem.styled';

const formatDate = date => format(new Date(date), 'PP');

const CitiesListItem = ({ place: { flag, city, date, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removePlace(id));

  return (
    <ListItem>
      <ItemLink to={id} state={{ city, date, flag }}>
        <span>
          {flag} {city}
        </span>
        <span>({formatDate(date)})</span>
      </ItemLink>
      <DeleteButton type="button" onClick={handleDelete}>
        <IoMdClose />
      </DeleteButton>
    </ListItem>
  );
};

export default CitiesListItem;
