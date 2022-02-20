import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    id: NaN,
    object: "none",
    state: "free",
  },
  reducers: {
    setModal(state, { payload }) {
      state.state = payload;
    },
    setObject(state, { payload }) {
      state.object = payload.object;
      state.id = payload.id
    }
  },
});

export default modalSlice.reducer;
export const { setModal, setObject } = modalSlice.actions;
