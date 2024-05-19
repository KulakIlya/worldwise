import { Outlet, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import AppBar from '../AppBar';
import { MainContent } from './SharedLayout.styled';

const SharedLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar />
      <MainContent $hasBackgroundImage={pathname === '/'}>
        <Outlet />
      </MainContent>
      <ToastContainer position="top-center" />
    </>
  );
};
export default SharedLayout;
