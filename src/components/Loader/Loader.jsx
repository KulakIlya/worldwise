import { InfinitySpin } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <InfinitySpin visible={true} width="200" color="#4fa94d" ariaLabel="infinity-spin-loading" />
    </LoaderWrapper>
  );
};
export default Loader;
