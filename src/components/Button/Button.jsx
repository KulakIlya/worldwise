import { StyledButton, StyledLink } from './Button.styled';

const Button = ({ children, type, to, onClick, disabled }) => {
  return to ? (
    <StyledLink to={to}>{children}</StyledLink>
  ) : (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
export default Button;
