import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    title: "Note title",
    backColor: "#aaaaaa",
    foreColor: "#111111",
    date: "2000-01-01",
    time: "00:00",
    id: 0,
    willRemind: false,
    text: "Write here!",
    isEditting: false,
  },
  reducers: {
    updateData(state, { payload }) {
      state.title = payload.title;
      state.backColor = payload.backColor;
      state.foreColor = payload.foreColor;
      state.date = payload.date;
      state.time = payload.time;
      state.willRemind = payload.willRemind;
      state.text = payload.text;
      state.isEditting = false;
      state.id = payload.id;
    },
    setEditting(state) {
      state.isEditting = !state.isEditting;
    },
    setBackColor(state, { payload }) {
      state.backColor = payload;
    },
    setForeColor(state, { payload }) {
      state.foreColor = payload;
    },
    setTitle(state, { payload }) {
      state.title = payload;
    },
    setText(state, { payload }) {
      state.text = payload;
    },
    setReminder(state) {
      state.willRemind = !state.willRemind;
    },
    setDate(state, { payload }) {
      state.date = payload;
    },
    setTime(state, { payload }) {
      const timeArr = state.time.split(":")
      if (payload.hour) {
        timeArr[0] = payload.value;
      } else {
        timeArr[1] = payload.value;
      }
      state.time = timeArr.join(':')
    },
  },
});

export default noteSlice.reducer;
export const {
  setTitle,
  setText,
  setEditting,
  setForeColor,
  setBackColor,
  setReminder,
  setDate,
  updateData,
  setTime,
} = noteSlice.actions;
