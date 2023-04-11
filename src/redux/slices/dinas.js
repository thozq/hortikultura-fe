/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import dinasService from 'services/dinas.service';

export const filterStatistik = createAsyncThunk('dinas', async (data, thunkAPI) => {
  const response = await dinasService.filterStatisik(data);
  return response.data;
});

const initialState = {
  statistik: [], status: null, detail: {}
};

const dinasSlice = createSlice({
  name: 'dinas',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
    builder.addCase(filterStatistik.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(filterStatistik.fulfilled, (state, action) => {
      state.status = 'success';
      state.riwayat = action.payload.data;
    });
    builder.addCase(filterStatistik.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default dinasSlice.reducer;