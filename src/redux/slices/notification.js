import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import PdhService from 'services/pdh.service';

export const getAllNotification = createAsyncThunk('pdh/getAllNotification', async () => {
  const response = await PdhService.getAllNotification();
  return response.data;
});

const initialState = {
  status: '',
  notification: []
};
const pdhSlice = createSlice({
  name: 'pdh',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
    builder.addCase(getAllNotification.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAllNotification.fulfilled, (state, action) => {
      state.status = 'success';
      state.notification = action.payload.notification;
    });
    builder.addCase(getAllNotification.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default pdhSlice.reducer;
