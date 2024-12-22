import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
    reset() {
      return 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;
