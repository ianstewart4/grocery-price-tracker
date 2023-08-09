import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trackerReducer from "../features/trackers/trackerSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trackers: trackerReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
