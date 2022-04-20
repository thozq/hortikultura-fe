import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import userReducer from './slices/user';

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
// const reducer = {
//   auth: authReducer,
//   message: messageReducer,
//   user: userReducer
// };

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
