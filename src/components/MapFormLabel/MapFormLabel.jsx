import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../ErrorMessage';

import { selectCity, selectFlag } from '../../redux/map/selectors';
import { changeCurrentCity, changeCurrentDate, changeCurrentNotes } from '../../redux/map/slice';
import { Flag, Label, Wrapper } from './MapFormLabel.styled';

const MapFormLabel = ({ type, register, error }) => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const flag = useSelector(selectFlag);

  if (type === 'city') {
    return (
      <Label>
        <span>City name</span>
        <Wrapper>
          <input
            type="text"
            {...register(type)}
            placeholder="London"
            value={city}
            onChange={e => dispatch(changeCurrentCity(e.currentTarget.value))}
          />
          <Flag>{flag}</Flag>
        </Wrapper>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Label>
    );
  }

  if (type === 'date')
    return (
      <Label>
        <span>When did you go to {city}</span>

        <input
          type="date"
          {...register(type)}
          placeholder="01/01/2001"
          onChange={e => dispatch(changeCurrentDate(e.currentTarget.value))}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Label>
    );

  if (type === 'notes')
    return (
      <Label>
        <span>Notes about your trip to {city}</span>
        <textarea
          {...register(type)}
          placeholder="Breathtaking views"
          onChange={e => dispatch(changeCurrentNotes(e.currentTarget.value))}
        ></textarea>
      </Label>
    );
};
export default MapFormLabel;
