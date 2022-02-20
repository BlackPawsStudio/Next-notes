import { createSlice } from "@reduxjs/toolkit";

const saverSlice = createSlice({
  name: "saver",
  initialState: {
    target: 'none'
  },
  reducers: {
    setTarget(state, { payload }) {
      state.target = payload
    }
  },
});

export default saverSlice.reducer;
export const { setTarget } = saverSlice.actions;
