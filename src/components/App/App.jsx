import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import CitiesList from '../CitiesList';
import CountriesList from '../CountriesList';
import Loader from '../Loader';
import MapForm from '../MapForm';
import PlaceDetails from '../PlaceDetails';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import SharedLayout from '../SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const PricingPage = lazy(() => import('../../pages/PricingPage'));
const ProductsPage = lazy(() => import('../../pages/ProductsPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const MapPage = lazy(() => import('../../pages/MapPage'));

const theme = {
  colors: {
    colorBrand1: '#ffb545',
    colorBrand2: '#00c46a',
    colorDark0: '#242a2e',
    colorDark1: '#2d3439',
    colorDark2: '#42484d',
    colorLight1: '#aaa',
    colorLight2: '#ececec',
    colorLight3: '#d6dee0',
  },
};

const GlobalStyle = createGlobalStyle`

  body {
    color: ${props => props.theme.colors.colorLight2};
  }
  ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  button {
    cursor: pointer;
  }

  a {
    transition: color 250ms ease-in-out;
  }

  a.active{
    color: ${props => props.theme.colors.colorBrand2};
  }

  section{
  margin: 0 auto;

  width: 90%;
  height: 100%;
  padding: 50px 0;
  display: grid;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding-top: 100px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: left;
  }

    @media screen and (min-width: 768px) {
    width: 80%;
  }
  
  }
  h2 {
    font-size: 38px;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 40px;
    }
  }

  form{
    text-align: left;
  padding: 20px 30px;
  justify-self: flex-start;

  margin: 0 auto;

  width: 100%;
  max-width: 480px;

  background-color: ${props => props.theme.colors.colorDark2};

  border-radius: 7px;

  label {
    display: block;
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  }

  .leaflet-popup .leaflet-popup-content-wrapper {
    background-color: ${props => props.theme.colors.colorDark1};

  color: ${props => props.theme.colors.colorLight2};
  border-radius: 5px;
  padding-right: 6px;
}

.leaflet-popup .leaflet-popup-content {
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.leaflet-popup .leaflet-popup-content span:first-child {
  font-size: 25px;
  line-height: 1;
}

.leaflet-popup .leaflet-popup-tip {
  background-color: ${props => props.theme.colors.colorDark1};

}

.leaflet-popup-content-wrapper {
  border-left: 5px solid ${props => props.theme.colors.colorBrand2};
}
  
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route
                path="register"
                element={<RestrictedRoute redirectTo="/map" component={<RegistrationPage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute redirectTo="/map" component={<LoginPage />} />}
              />
            </Route>
            <Route
              path="/map"
              element={<PrivateRoute redirectTo="/login" component={<MapPage />} />}
            >
              <Route index element={<MapForm />} />
              <Route path="cities" element={<CitiesList />} />
              <Route path="cities/:id" element={<PlaceDetails />} />
              <Route path="countries" element={<CountriesList />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};
export default App;
