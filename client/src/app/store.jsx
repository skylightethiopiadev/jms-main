import { configureStore } from "@reduxjs/toolkit";

// reducers
import globalReducer from "../features/globals/globalSlice";
export const store = configureStore({
  reducer: {
    globals: globalReducer,
  },
});
