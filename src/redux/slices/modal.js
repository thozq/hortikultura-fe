import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import modalService from 'services/modal.service';
import { setMessage } from './message';
import { PURGE } from 'redux-persist';

export const getAllModal = createAsyncThunk('modal/modal', async (id) => {
  const response = await modalService.getAllModal(id);
  return response.data;
});

export const addModal = createAsyncThunk('modal/addModal', async ({ id, data }, thunkAPI) => {
  const response = await modalService.addModal(id, data);
  thunkAPI.dispatch(setMessage(response));
  return response.data;
});

export const editModal = createAsyncThunk('modal/edit', async ({ id, data }, thunkAPI) => {
  const response = await modalService.editModal(id, data);
  thunkAPI.dispatch(setMessage(response));
  return response.data;
});

export const deleteModal = createAsyncThunk('modal/delete', async ({ id, idLahan }, thunkAPI) => {
  const response = await modalService.deleteModal(id);
  thunkAPI.dispatch(getAllModal(idLahan));
  thunkAPI.dispatch(setMessage(response));
  return response.data;
});
const initialState = { riwayat: [], status: null, detail: {} };
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
    builder.addCase(getAllModal.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAllModal.fulfilled, (state, action) => {
      state.status = 'success';
      state.riwayat = action.payload.data;
    });
    builder.addCase(getAllModal.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(addModal.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addModal.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(addModal.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(editModal.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(editModal.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(editModal.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(deleteModal.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(deleteModal.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(deleteModal.rejected, (state) => {
      state.status = 'failed';
    });
  }
});
export default modalSlice.reducer;
