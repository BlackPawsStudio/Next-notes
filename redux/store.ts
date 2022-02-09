import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/noteSlice";
import amountSlice from "./slices/allNotesSlice"
import prefsSlice from "./slices/prefsSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  noteSlice: noteSlice,
  amountSlice: amountSlice,
  prefsSlice: prefsSlice,
  userSlice: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
