"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.trackerSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    trackers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};
exports.trackerSlice = (0, toolkit_1.createSlice)({
    name: "tracker",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
});
exports.reset = exports.trackerSlice.actions.reset;
exports.default = exports.trackerSlice.reducer;
