import { createSlice } from "@reduxjs/toolkit";

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
