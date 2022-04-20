import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransaksiService from 'services/transaksi.service';

export const getAllTransaksi = createAsyncThunk('transaksi/getAllTransaksi', async () => {
  const response = await TransaksiService.getAllTransaksi();
  return response.data;
});

export const getTransaksiById = createAsyncThunk('transaksi/getTransaksiById', async (data) => {
  const response = await TransaksiService.getTransaksiById(data);
  return response.data;
});

export const addTransaksi = createAsyncThunk('transaksi/addTransaksi', async (data) => {
  const response = await TransaksiService.addTransaksi(data);
  return response.data;
});

const transaksiSlice = createSlice({
  name: 'transaksi',
  initialState: { status: null, transaksi: null, diajukan: null, detail: null },
  extraReducers: {
    [getAllTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllTransaksi.fulfilled]: (state, action) => {
      state.status = 'success';
      state.transaksi = action.payload.data.filter((item) => item.statusPenjualan !== 'diajukan');
      state.diajukan = action.payload.data.filter((item) => item.statusPenjualan === 'diajukan');
    },
    [getAllTransaksi.rejected]: (state) => {
      state.status = 'failed';
    },
    [getTransaksiById.pending]: (state) => {
      state.status = 'loading';
    },
    [getTransaksiById.fulfilled]: (state, action) => {
      state.status = 'success';
      state.detail = action.payload.data;
    },
    [getTransaksiById.rejected]: (state) => {
      state.status = 'failed';
    },
    [addTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [addTransaksi.fulfilled]: (state) => {
      state.status = 'success';
    },
    [addTransaksi.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default transaksiSlice.reducer;
