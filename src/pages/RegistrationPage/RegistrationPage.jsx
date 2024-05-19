import RedirectLink from '../../components/RedirectLink';
import RegisterForm from '../../components/RegisterForm';

import { Section } from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Section>
      <RegisterForm />
      <RedirectLink to="/login">Already registered?</RedirectLink>
    </Section>
  );
};
export default RegistrationPage;
