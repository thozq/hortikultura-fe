import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from 'services/user.service';

export const getDashboardStok = createAsyncThunk('user/getDashboardStok', async () => {
  const response = await UserService.getDashboardStok();
  return response.data;
});

export const addStok = createAsyncThunk('user/addStok', async (data) => {
  const response = await UserService.addStok(data);
  return response.data;
});

export const getAllStok = createAsyncThunk('user/getAllStok', async () => {
  const response = await UserService.getAllStok();
  return response.data.data;
});

export const getStokById = createAsyncThunk('user/getStokById', async (id) => {
  const response = await UserService.getStokById(id);
  return response.data.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { dashboard: null, status: null, stoks: null, detail: null },
  extraReducers: {
    [getDashboardStok.pending]: (state) => {
      state.status = 'loading';
    },
    [getDashboardStok.fulfilled]: (state, action) => {
      state.status = 'success';
      state.dashboard = action.payload;
    },
    [getDashboardStok.rejected]: (state) => {
      state.status = 'failed';
    },
    [addStok.pending]: (state) => {
      state.status = 'loading';
    },
    [addStok.fulfilled]: (state) => {
      state.status = 'success';
    },
    [addStok.rejected]: (state) => {
      state.status = 'failed';
    },
    [getAllStok.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllStok.fulfilled]: (state, action) => {
      state.status = 'success';
      state.stoks = action.payload;
    },
    [getAllStok.rejected]: (state) => {
      state.status = 'failed';
    },
    [getStokById.pending]: (state) => {
      state.status = 'loading';
    },
    [getStokById.fulfilled]: (state, action) => {
      state.status = 'success';
      state.detail = action.payload;
    },
    [getStokById.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default userSlice.reducer;
