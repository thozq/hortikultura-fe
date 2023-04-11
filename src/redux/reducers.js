import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import userReducer from './slices/user';
import messageReducer from './slices/message';
import transaksiSlice from './slices/transaksi';
import usangSlice from './slices/usang';
import blankoReducer from './slices/blanko';
import supervisiReducer from './slices/supervisi';
import lahanReducer from './slices/lahan';
import modalReducer from './slices/modal';
import dinasReducer from './slices/dinas';

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  message: messageReducer,
  transaksi: transaksiSlice,
  usang: usangSlice,
  blanko: blankoReducer,
  supervisi: supervisiReducer,
  lahan: lahanReducer,
  modal: modalReducer,
  dinas: dinasReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
