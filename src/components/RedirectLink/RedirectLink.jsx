import { StyledLink } from './RedirectLink.styled';

const RedirectLink = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
export default RedirectLink;
