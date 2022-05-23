/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
// const childUser = JSON.parse(localStorage.getItem('child-user'));

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
      thunkAPI.dispatch(setMessage(response));
      return { user: response.data.user };
    } catch (error) {
      const response = error.response;
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(response));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signin = createAsyncThunk('auth/signin', async ({ email, password }, thunkAPI) => {
  try {
    const data = await AuthService.signin(email, password);
    return { user: data.user };
  } catch (error) {
    const response = error.response;
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(response));
    return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const relog = createAsyncThunk('auth/relog', async (data, thunkAPI) => {
  try {
    const response = await AuthService.relog(data);
    return { user: response.user };
  } catch (error) {
    const response = error.response;
    thunkAPI.dispatch(setMessage(response));
    return thunkAPI.rejectWithValue();
  }
});

export const addSupervisi = createAsyncThunk('auth/addSupervisi', async (data, thunkAPI) => {
  try {
    const response = await AuthService.addSupervisi(data);
    return { user: response.petani };
  } catch (error) {
    const response = error.response;
    thunkAPI.dispatch(setMessage(response));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = { isLoggedIn: user ? true : false, user: null, parentUser: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUser: () => {
      localStorage.removeItem('child-user');
      localStorage.removeItem('child-token');
      return { user: user, parentUser: null, isLoggedIn: true };
    }
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
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
      state.parentUser = null;
    },
    [relog.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.parentUser = user;
    },
    [relog.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [addSupervisi.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.parentUser = user;
    },
    [addSupervisi.rejected]: (state) => {
      state.isLoggedIn = false;
    }
  }
});
const { reducer, actions } = authSlice;
export const { changeUser } = actions;
export default reducer;
