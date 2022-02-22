import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "",
  },
  reducers: {
    setLang(state, { payload }) {
      state.lang = payload;
    },
  },
});

export default languageSlice.reducer;
export const { setLang } = languageSlice.actions;
