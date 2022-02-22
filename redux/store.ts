import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/noteSlice";
import amountSlice from "./slices/allNotesSlice";
import prefsSlice from "./slices/prefsSlice";
import userSlice from "./slices/userSlice";
import notificationSlice from "./slices/notificationSlice";
import modalSlice from "./slices/modalSlice";
import saverSlice from "./slices/saverSlice";
import languageSlice from "./slices/languageSlice";

const rootReducer = combineReducers({
  noteSlice: noteSlice,
  amountSlice: amountSlice,
  prefsSlice: prefsSlice,
  userSlice: userSlice,
  notificationSlice: notificationSlice,
  modalSlice: modalSlice,
  saverSlice: saverSlice,
  languageSlice: languageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
