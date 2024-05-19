import LoginForm from '../../components/LoginForm';
import RedirectLink from '../../components/RedirectLink';

import { Section } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Section>
      <LoginForm />
      <RedirectLink to="/register">Not registered yet?</RedirectLink>
    </Section>
  );
};
export default LoginPage;
