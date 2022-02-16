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
    addNotifications(state, { payload }) {
      state.notifications.push(...payload);
    },
    setNotifications(state, { payload }) {
      state.notifications = payload;
    },
    removeNotification(state, { payload }) {
      const elem = state.notifications.find((el) => {
        if (el.time === payload.time && el.date === payload.date) {
          return el
        }
      });
      const id = state.notifications.indexOf(elem)
      state.notifications.splice(id, 1)
      console.log(a(elem, id, state.notifications));
    },
  },
});

export default notificationSlice.reducer;
export const { addNotifications, setNotifications, removeNotification } =
  notificationSlice.actions;
