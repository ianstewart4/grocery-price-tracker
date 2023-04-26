"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.productSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};
exports.productSlice = (0, toolkit_1.createSlice)({
    name: "product",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
});
exports.reset = exports.productSlice.actions.reset;
exports.default = exports.productSlice.reducer;
