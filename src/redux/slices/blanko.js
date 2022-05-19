import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BlankoService from 'services/blanko.service';
import { setMessage } from './message';

export const getAllBlanko = createAsyncThunk('blanko/getAllBlanko', async () => {
  const response = await BlankoService.getAllBlanko();
  return response.data;
});

export const getBlankoById = createAsyncThunk('blanko/getBlankoById', async (id) => {
  const response = await BlankoService.getBlankoById(id);
  return response.data;
});

export const addBlanko = createAsyncThunk('blanko/addBlanko', async (data, thunkAPI) => {
  const response = await BlankoService.addBlanko(data);
  thunkAPI.dispatch(setMessage(response));
  return response.data;
});

const blankoSlice = createSlice({
  name: 'blanko',
  initialState: { riwayat: [], status: null, detail: null },
  extraReducers: {
    [getAllBlanko.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllBlanko.fulfilled]: (state, action) => {
      state.status = 'success';
      state.riwayat = action.payload.data;
    },
    [getAllBlanko.rejected]: (state) => {
      state.status = 'failed';
    },
    [getBlankoById.pending]: (state) => {
      state.status = 'loading';
    },
    [getBlankoById.fulfilled]: (state, action) => {
      state.status = 'success';
      state.detail = action.payload.data;
    },
    [getBlankoById.rejected]: (state) => {
      state.status = 'failed';
    },
    [addBlanko.pending]: (state) => {
      state.status = 'loading';
    },
    [addBlanko.fulfilled]: (state) => {
      state.status = 'success';
    },
    [addBlanko.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default blankoSlice.reducer;
