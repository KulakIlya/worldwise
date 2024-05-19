import { combineReducers, configureStore, createAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

import { authReducer as auth } from './auth/slice';
import { mapReducer as map } from './map/slice';

const combinedReducers = combineReducers({ auth, map });

const rootReducer = (state, action) => {
  if (action.type === 'RESET') return (state = {});

  return combinedReducers(state, action);
};

export const resetAppState = createAction('RESET');

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
