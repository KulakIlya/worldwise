import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../Button';
import MapFormLabel from '../MapFormLabel';
import MapPlaceholder from '../MapPlaceholder';

import { addPlace } from '../../redux/map/operations';
import { selectCity, selectFlag, selectIsLoading, selectPlace } from '../../redux/map/selectors';
import { resetPlace } from '../../redux/map/slice';

import { ButtonGroup } from '../MapFormLabel/MapFormLabel.styled';
import { Form } from './MapForm.styled';

const VALIDATION_SCHEMA = Yup.object().shape({
  city: Yup.string().required('City name is required'),
  date: Yup.date().required('Date is required'),
});

const MapForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION_SCHEMA) });

  const location = useLocation();

  const backHref = location.state ?? '';

  const city = useSelector(selectCity);
  const flag = useSelector(selectFlag);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ notes }) => {
    dispatch(addPlace({ ...selectPlace, notes }));

    navigate('cities');
  };

  const backButtonClick = () => dispatch(resetPlace());

  return city ? (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MapFormLabel type="city" register={register} city={city} flag={flag} error={errors.city} />
      <MapFormLabel type="date" register={register} city={city} error={errors.date} />
      <MapFormLabel type="notes" register={register} city={city} />
      <ButtonGroup>
        <NavLink to={backHref} onClick={backButtonClick}>
          <FaArrowLeftLong /> Back
        </NavLink>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Add'}
        </Button>
      </ButtonGroup>
    </Form>
  ) : (
    <MapPlaceholder shouldRedirect />
  );
};
export default MapForm;
