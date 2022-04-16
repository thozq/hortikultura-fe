/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password, provinsi, kecamatan, kabupaten, alamat, role }, thunkAPI) => {
    try {
      const response = await AuthService.signup(
        name,
        email,
        password,
        provinsi,
        kecamatan,
        kabupaten,
        alamat,
        role
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const signin = createAsyncThunk('auth/signin', async ({ email, password }, thunkAPI) => {
  try {
    const data = await AuthService.signin(email, password);
    return { user: data.user };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [signin.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [signin.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});
const { reducer } = authSlice;

export default reducer;
