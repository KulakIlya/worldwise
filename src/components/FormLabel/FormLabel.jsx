import ErrorMessage from '../ErrorMessage';
import { Label } from './FormLabel.styled';

const FormLabel = ({ type, register, error }) => {
  if (type === 'name')
    return (
      <Label>
        <span>Enter username</span>
        <input
          type="text"
          {...register('username')}
          autoComplete="name"
          placeholder="JamesHolland"
          defaultValue="Test Username"
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Label>
    );
  if (type === 'email')
    return (
      <Label>
        <span>Enter email</span>
        <input
          type="email"
          {...register('email')}
          autoComplete="email"
          placeholder="example@mail.com"
          defaultValue="test123@gmail.com"
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Label>
    );
  if (type === 'password')
    return (
      <Label>
        <span>Enter password</span>
        <input
          type="password"
          {...register('password')}
          autoComplete="current-password"
          defaultValue="123123123"
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Label>
    );
};
export default FormLabel;
