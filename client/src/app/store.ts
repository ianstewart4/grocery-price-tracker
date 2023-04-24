import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trackerReducer from "../features/trackers/trackerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trackers: trackerReducer,
  },
});
