import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StokService from 'services/stok.service';

export const getDashboardStok = createAsyncThunk('stok/getDashboardStok', async () => {
  const response = await StokService.getDashboardStok();
  return response.data;
});

export const addStok = createAsyncThunk('stok/addStok', async (data) => {
  const response = await StokService.addStok(data);
  return response.data;
});

export const getAllStok = createAsyncThunk('stok/getAllStok', async () => {
  const response = await StokService.getAllStok();
  return response.data.data;
});

export const getStokById = createAsyncThunk('stok/getStokById', async (id) => {
  const response = await StokService.getStokById(id);
  return response.data.data;
});

const stokSlice = createSlice({
  name: 'stok',
  initialState: { dashboard: {}, status: null, stoks: null, detail: null },
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

export default stokSlice.reducer;
