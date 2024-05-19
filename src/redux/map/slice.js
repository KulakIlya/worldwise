import { createSlice } from '@reduxjs/toolkit';

import { getFlagEmoji } from '../../helpers';
import { addPlace, getCurrentPlace, getUserPlaces, removePlace } from './operations';

export const initialState = {
  places: [],
  currentPlace: null,
  isLoading: false,
};

const parsePlaces = places => places.map(item => JSON.parse(item));

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCurrentPlace(state, { payload }) {
      state.currentPlace = payload;
    },
    changeCurrentCity(state, { payload }) {
      state.currentPlace.city = payload;
    },
    changeCurrentDate(state, { payload }) {
      state.currentPlace.date = payload;
    },
    changeCurrentNotes(state, { payload }) {
      state.currentPlace.notes = payload;
    },
    resetPlace(state) {
      state.currentPlace = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getUserPlaces.fulfilled, (state, { payload: { places } }) => {
        state.places = parsePlaces(places);
      })
      .addCase(addPlace.fulfilled, (state, { payload }) => {
        state.places = payload;
        state.currentPlace = null;
      })
      .addCase(removePlace.fulfilled, (state, { payload }) => {
        state.places = payload;
      })
      .addCase(getCurrentPlace.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getCurrentPlace.fulfilled,
        (
          state,
          {
            payload: {
              city,
              coords,
              country: { country_code, name },
            },
          }
        ) => {
          state.currentPlace = {
            city,
            coords: coords,
            flag: getFlagEmoji(country_code),
            country: name,
          };
          state.isLoading = false;
        }
      )
      .addCase(getCurrentPlace.rejected, state => {
        state.isLoading = false;
      }),
});

export const mapReducer = mapSlice.reducer;
export const {
  increaseZoom,
  decreaseZoom,
  setCurrentCoords,
  resetPlace,
  setCurrentPlace,
  changeCurrentCity,
  changeCurrentDate,
  changeCurrentNotes,
} = mapSlice.actions;
