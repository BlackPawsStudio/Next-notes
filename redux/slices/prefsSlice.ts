import { createSlice } from "@reduxjs/toolkit";

const prefSlice = createSlice({
  name: "preferences",
  initialState: {
    backColor: "#aaaaaa",
    foreColor: "#111111",
    title: "New note",
    text: "Write here!",
    sound: 1,
  },
  reducers: {
    updateBackColor(state, { payload }) {
      state.backColor = payload;
    },
    updateForeColor(state, { payload }) {
      state.foreColor = payload;
    },
    updateTitle(state, { payload }) {
      state.title = payload;
    },
    updateText(state, { payload }) {
      state.text = payload;
    },
    updateSound(state, { payload }) {
      state.sound = payload;
    },
    updateAll(state, { payload }) {
      state.backColor = payload.backColor;
      state.foreColor = payload.foreColor;
      state.title = payload.title;
      state.text = payload.text;
      state.sound = payload.sound;
    },
  },
});

export default prefSlice.reducer;
export const {
  updateBackColor,
  updateForeColor,
  updateText,
  updateTitle,
  updateSound,
  updateAll,
} = prefSlice.actions;
