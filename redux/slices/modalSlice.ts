import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    id: NaN,
    object: "none",
    state: "free",
    message: '',
  },
  reducers: {
    setModal(state, { payload }) {
      state.state = payload;
    },
    setObject(state, { payload }) {
      state.object = payload.object;
      state.id = payload.id
    },
    setAlert(state, { payload }) {
      state.state = 'alert';
      state.message = payload
    }
  },
});

export default modalSlice.reducer;
export const { setModal, setObject, setAlert } = modalSlice.actions;
