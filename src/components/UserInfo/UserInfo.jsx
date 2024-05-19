import { useDispatch, useSelector } from 'react-redux';

import { selectUsername } from '../../redux/auth/selectors';

import { signOut } from '../../redux/auth/operations';
import { resetAppState } from '../../redux/store';
import { Info } from './UserInfo.styled';

const UserInfo = () => {
  const name = useSelector(selectUsername);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(resetAppState());
    localStorage.clear();
    dispatch(signOut());
  };
  return (
    <Info className="info">
      <span>👋</span>
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </Info>
  );
};
export default UserInfo;
