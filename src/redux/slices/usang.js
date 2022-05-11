import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UsangService from 'services/usang.service';
import { setMessage } from './message';

export const getAllUsang = createAsyncThunk('usang/getAllUsang', async () => {
  const response = await UsangService.getAllUsang();
  return response.data;
});

export const getUsangById = createAsyncThunk('usang/getUsangById', async (id) => {
  const response = await UsangService.getUsangById(id);
  return response.data;
});

export const addUsang = createAsyncThunk('usang/addUsang', async (data, thunkAPI) => {
  const response = await UsangService.addUsang(data);
  thunkAPI.dispatch(setMessage(response.data.message));
  return response.data;
});

const usangSlice = createSlice({
  name: 'stok',
  initialState: { usang: [], status: null, detail: [] },
  extraReducers: {
    [getAllUsang.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllUsang.fulfilled]: (state, action) => {
      state.status = 'success';
      state.usang = action.payload.data;
    },
    [getAllUsang.rejected]: (state) => {
      state.status = 'failed';
    },
    [getUsangById.pending]: (state) => {
      state.status = 'loading';
    },
    [getUsangById.fulfilled]: (state, action) => {
      state.status = 'success';
      state.detail = action.payload.data;
    },
    [getUsangById.rejected]: (state) => {
      state.status = 'failed';
    },
    [addUsang.pending]: (state) => {
      state.status = 'loading';
    },
    [addUsang.fulfilled]: (state, action) => {
      state.status = 'success';
      state.detail = action.payload.data;
    },
    [addUsang.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default usangSlice.reducer;
