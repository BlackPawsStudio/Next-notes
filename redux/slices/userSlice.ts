import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: NaN,
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
