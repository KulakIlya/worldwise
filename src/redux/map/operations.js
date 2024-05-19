import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { createClient } from '@supabase/supabase-js';
import { getPlace } from '../../api/mapboxApi';

//!
const BASE_URL = 'https://ivsgiavzqpqlnmwntuye.supabase.co';
const KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2c2dpYXZ6cXBxbG5td250dXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4Mzc2MDAsImV4cCI6MjAzMDQxMzYwMH0.k7iOo2qlcZk47hKAaOjQYKvtctPoMXx9IclYzIcGtSk';

const supabase = createClient(BASE_URL, KEY);

export const getUserPlaces = createAsyncThunk('map/getPlaces', async (_, thunkAPI) => {
  const {
    auth: { id },
  } = thunkAPI.getState();

  const {
    data: [place],
    error,
  } = await supabase.from('places').select().eq('id', id).limit(1);

  if (error) return thunkAPI.rejectWithValue(error);

  return place;
});

export const addPlace = createAsyncThunk('map/addPlace', async ({ notes }, thunkAPI) => {
  const {
    map: {
      places,
      currentPlace: { country, flag, coords, date, city },
    },
    auth: { id },
  } = thunkAPI.getState();

  const updatedPlaces = {
    places: [
      ...places,
      {
        coords,
        notes,
        country,
        flag,
        date: new Date(date).toISOString(),
        city,
        id: nanoid(),
      },
    ],
  };

  const { error } = await supabase.from('places').update(updatedPlaces).eq('id', id);

  if (error) return thunkAPI.rejectWithValue(error);

  return updatedPlaces.places;
});

export const removePlace = createAsyncThunk('map/removePlace', async (id, thunkAPI) => {
  const {
    map: { places },
    auth: { id: userID },
  } = thunkAPI.getState();

  const updatedPlaces = {
    places: places.filter(item => item.id !== id),
  };

  const { error } = await supabase.from('places').update(updatedPlaces).eq('id', userID);

  if (error) return thunkAPI.rejectWithValue(error);

  return updatedPlaces.places;
});

export const getCurrentPlace = createAsyncThunk('map/getCurrentPlace', async (coords, thunkAPI) => {
  try {
    const data = await getPlace(coords);

    return { ...data, coords: [coords.lat, coords.lng], notes: '' };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
