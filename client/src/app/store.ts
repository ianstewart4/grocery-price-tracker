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
