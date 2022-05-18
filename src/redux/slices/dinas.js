import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DinasService from 'services/dinas.service';

export const getAllSupervisi = createAsyncThunk('dinas/getAllSupervisi', async () => {
  const response = await DinasService.getAllSupervisi();
  return response.data;
});

const dinasSlice = createSlice({
  name: 'dinas',
  initialState: { status: null, petani: [] },
  extraReducers: {
    [getAllSupervisi.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllSupervisi.fulfilled]: (state, action) => {
      state.status = 'success';
      state.petani = action.payload.petani;
    },
    [getAllSupervisi.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default dinasSlice.reducer;
