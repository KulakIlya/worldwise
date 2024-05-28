import 'leaflet/dist/leaflet.css';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Map from '../../components/Map/';
import UserInfo from '../../components/UserInfo';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectCoords } from '../../redux/map/selectors';
import {
  ButtonGroup,
  ButtonWrapper,
  CloseButton,
  CopyRight,
  LeftSide,
  OpenButton,
  RightSide,
  Wrapper,
} from './MapPage.styled';

const MapPage = () => {
  const [isLeftSideOpened, setIsLeftSideOpened] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAddAnimation = () => setIsAnimated(true);

  const currentCoords = useSelector(selectCoords);

  const [, setSearchParams] = useSearchParams();

  const onLeftSideOpen = () => setIsLeftSideOpened(true);
  const onLeftSideClose = () => setIsLeftSideOpened(false);

  useEffect(() => {
    if (currentCoords?.length) setSearchParams({ lat: currentCoords[0], lng: currentCoords[1] });
  }, [currentCoords, setSearchParams]);

  return (
    <Wrapper>
      <LeftSide $isOpened={isLeftSideOpened}>
        <Link to="/">
          <img src={logo} alt="Worldwise logo" width="218" />
        </Link>
        <ButtonGroup>
          <NavLink to="cities">Cities</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </ButtonGroup>

        <Outlet context={{ setIsAnimated, setIsLeftSideOpened }} />

        <UserInfo />
        <CopyRight>&copy; 2024 by WorldWise Inc.</CopyRight>
        <CloseButton type="button" onClick={onLeftSideClose}>
          <IoMdClose />
        </CloseButton>
      </LeftSide>
      <RightSide>
        <Map onAddAnimation={handleAddAnimation} onLeftSideOpen={onLeftSideOpen} />

        <ButtonWrapper $isAnimated={isAnimated}>
          <div></div>
          <OpenButton type="button" onClick={onLeftSideOpen}>
            <RxHamburgerMenu />
          </OpenButton>
        </ButtonWrapper>
        <UserInfo />
      </RightSide>
    </Wrapper>
  );
};
export default MapPage;
