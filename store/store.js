import { configureStore, combineReducers } from "@reduxjs/toolkit";
import lezzooSlice from "./lezzoo";

export const store = configureStore({
    reducer: {
        lezzoo: lezzooSlice,
    },
});

export default store;
