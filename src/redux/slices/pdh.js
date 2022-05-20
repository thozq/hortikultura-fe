import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PdhService from 'services/pdh.service';

export const getAllSupervisi = createAsyncThunk('pdh/getAllSupervisi', async () => {
  const response = await PdhService.getAllSupervisi();
  return response.data;
});

const pdhSlice = createSlice({
  name: 'pdh',
  initialState: {
    status: null,
    petani: []
  },
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

export default pdhSlice.reducer;
