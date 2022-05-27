import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import PdhService from 'services/pdh.service';

export const getAllSupervisi = createAsyncThunk('pdh/getAllSupervisi', async () => {
  const response = await PdhService.getAllSupervisi();
  return response.data;
});

const initialState = {
  status: '',
  petani: []
};
const pdhSlice = createSlice({
  name: 'pdh',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
    builder.addCase(getAllSupervisi.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAllSupervisi.fulfilled, (state, action) => {
      state.status = 'success';
      state.petani = action.payload.petani;
    });
    builder.addCase(getAllSupervisi.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default pdhSlice.reducer;
