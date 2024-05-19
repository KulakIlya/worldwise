import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { signIn, signOut, signUp } from './operations';

const initialState = {
  username: '',
  email: '',
  id: '',
  isLoggedIn: false,
};

const setUser = (state, { payload: { user } }) => {
  state.username = user.user_metadata.username;
  state.email = user.email;
  state.id = user.id;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, setUser)
      .addCase(signIn.fulfilled, setUser)
      .addCase(signOut.fulfilled, state => {
        state.username = '';
        state.email = '';
        state.isLoggedIn = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};

export const actions = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
