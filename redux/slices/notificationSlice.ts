import { createSlice } from "@reduxjs/toolkit";

const a = (...arr) => {
  return JSON.parse(JSON.stringify(arr))
}

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
  },
  reducers: {
    setNotifications(state, { payload }) {
      state.notifications = payload;
    }
  },
});

export default notificationSlice.reducer;
export const { setNotifications } =
  notificationSlice.actions;
