import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeader: true,
};

const globalSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    setIsHeader: (state, action) => {
      state.isHeader = action.payload;
    },
  },
});

// actions
export const { setIsHeader } = globalSlice.actions;
// selector
export const selectIsHeader = (state) => state.globals.isHeader;

export default globalSlice.reducer;
