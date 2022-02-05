import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "notes amount",
  initialState: {
    amount: 1,
  },
  reducers: {
    increaseAmount(state) {
      state.amount = state.amount + 1;
    },
    decreaseAmount(state) {
      state.amount = state.amount - 1;
    },
    setAmount(state, { payload }) {
      state.amount = payload;
    },
  },
});

export default amountSlice.reducer;
export const { increaseAmount, decreaseAmount, setAmount } =
  amountSlice.actions;
