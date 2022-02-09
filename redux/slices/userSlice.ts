import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user slice",
  initialState: {
    id: 0,
    login: "",
  },
  reducers: {
    updateLogin(state, { payload }) {
      state.id = payload.id;
      state.login = payload.login;
    },
  },
});

export default userSlice.reducer;
export const { updateLogin } = userSlice.actions;
