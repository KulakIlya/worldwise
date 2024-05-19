import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { signUp } from '../../redux/auth/operations';
import Button from '../Button';
import FormLabel from '../FormLabel';

const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string().required('Username is required').min(2, 'Name must be longer'),
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(7, 'Password must be longer'),
});

const showError = message => toast.error(message);

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION_SCHEMA) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = ({ username, email, password }) => {
    dispatch(
      signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      })
    )
      .unwrap()
      .catch(() => showError('User already exists'));
    navigate('/map');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel type="name" register={register} error={errors.username} />
      <FormLabel type="email" register={register} error={errors.email} />
      <FormLabel type="password" register={register} error={errors.password} />
      <Button type="submit">Register</Button>
    </form>
  );
};
export default RegisterForm;
