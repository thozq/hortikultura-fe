import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import persistedReducer from './reducers';

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  devTools: true
});

export const persistor = persistStore(store);

export default store;
