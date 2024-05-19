import { createSelector } from '@reduxjs/toolkit';

export const selectZoom = state => state.map.zoom;
export const selectPlaces = state => state.map.places;
export const selectCity = state => state.map.currentPlace?.city;
export const selectCountry = state => state.map.currentPlace?.country;
export const selectFlag = state => state.map.currentPlace?.flag;
export const selectCoords = state => state.map.currentPlace?.coords;
export const selectDate = state => state.map.currentPlace?.date;
export const selectNotes = state => state.map.currentPlace?.notes;
export const selectIsLoading = state => state.map.isLoading;

export const selectPlace = createSelector([state => state.map], map => map.currentPlace);
export const selectUniqueCountries = createSelector([state => state.map.places], places => {
  const usedCountries = [];
  return places.filter(item => {
    if (usedCountries.includes(item.country)) return;

    usedCountries.push(item.country);
    return item;
  });
});
