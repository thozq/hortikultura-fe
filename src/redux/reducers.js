import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import messageReducer from './slices/message';
import stokSlice from './slices/stok';
import transaksiSlice from './slices/transaksi';
import usangSlice from './slices/usang';
import blankoReducer from './slices/blanko';
import pdhReducer from './slices/pdh';

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  stok: stokSlice,
  transaksi: transaksiSlice,
  usang: usangSlice,
  blanko: blankoReducer,
  pdh: pdhReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
