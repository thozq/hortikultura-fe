import { createSlice } from '@reduxjs/toolkit';
const initialState = { message: '', status: null };
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload.data.message, status: action.payload.status };
    },
    clearMessage: () => {
      return { message: '', status: null };
    }
  }
});
const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions;
export default reducer;
