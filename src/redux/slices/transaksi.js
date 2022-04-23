import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransaksiService from 'services/transaksi.service';

export const getAllTransaksi = createAsyncThunk('transaksi/getAllTransaksi', async () => {
  const response = await TransaksiService.getAllTransaksi();
  return response.data;
});

export const getTransaksiById = createAsyncThunk('transaksi/getTransaksiById', async (id) => {
  const response = await TransaksiService.getTransaksiById(id);
  return response.data;
});

export const addTransaksi = createAsyncThunk('transaksi/addTransaksi', async (data) => {
  const response = await TransaksiService.addTransaksi(data);
  return response.data;
});

export const deleteTransaksi = createAsyncThunk(
  'transaksi/deleteTransaksi',
  async (id, thunkAPI) => {
    const response = await TransaksiService.deleteTransaksi(id);
    thunkAPI.dispatch(getAllTransaksi());
    return response.data;
  }
);

export const acceptTransaksi = createAsyncThunk(
  'transaksi/acceptTransaksi',
  async (id, thunkAPI) => {
    const response = await TransaksiService.acceptTransaksi(id);
    thunkAPI.dispatch(getAllTransaksi());
    return response.data;
  }
);

export const declineTransaksi = createAsyncThunk(
  'transaksi/declineTransaksi',
  async (id, thunkAPI) => {
    const response = await TransaksiService.declineTransaksi(id);
    thunkAPI.dispatch(getAllTransaksi());
    return response.data;
  }
);

export const editTransaksi = createAsyncThunk('transaksi/editTransaksi', async (id) => {
  const response = await TransaksiService.editTransaksi(id);
  return response.data;
});

const transaksiSlice = createSlice({
  name: 'transaksi',
  initialState: {
    status: null,
    konfirmasi: [],
    diajukan: [],
    detail: {},
    riwayat: []
  },
  extraReducers: {
    [getAllTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllTransaksi.fulfilled]: (state, action) => {
      state.status = 'success';
      state.konfirmasi = action.payload.dibeli.filter((item) => item.statusTransaksi === 0);
      state.diajukan = action.payload.dijual.filter((item) => item.statusTransaksi === 0);
      state.riwayat = action.payload.dijual.filter((item) => item.statusTransaksi !== 0);
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
    },
    [deleteTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteTransaksi.fulfilled]: (state) => {
      state.status = 'success';
    },
    [deleteTransaksi.rejected]: (state) => {
      state.status = 'failed';
    },
    [acceptTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [acceptTransaksi.fulfilled]: (state) => {
      state.status = 'success';
    },
    [acceptTransaksi.rejected]: (state) => {
      state.status = 'failed';
    },
    [declineTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [declineTransaksi.fulfilled]: (state) => {
      state.status = 'success';
    },
    [declineTransaksi.rejected]: (state) => {
      state.status = 'failed';
    },
    [editTransaksi.pending]: (state) => {
      state.status = 'loading';
    },
    [editTransaksi.fulfilled]: (state) => {
      state.status = 'success';
    },
    [editTransaksi.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default transaksiSlice.reducer;
