const ErrorMessage = ({ children }) => {
  return (
    <p style={{ color: 'red' }} role="alert">
      {children}
    </p>
  );
};
export default ErrorMessage;
