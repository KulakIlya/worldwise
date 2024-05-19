import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signIn } from '../../redux/auth/operations';
import Button from '../Button';
import FormLabel from '../FormLabel';

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const showError = message => toast.error(message);

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION_SCHEMA) });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(
      signIn({
        email,
        password,
      })
    )
      .unwrap()
      .catch(() => showError('Incorrect email or password'));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel type="email" register={register} error={errors.email} />
        <FormLabel type="password" register={register} error={errors.password} />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};
export default LoginForm;
