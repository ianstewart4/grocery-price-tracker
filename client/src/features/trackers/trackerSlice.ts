import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trackerService from "./trackerService";

const initialState = {
  trackers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = trackerSlice.actions;
export default trackerSlice.reducer;
