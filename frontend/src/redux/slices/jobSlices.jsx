import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "../actions/jobActions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    createJob: (state, action) => {
      state.jobs.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { createJob } = jobSlice.actions;
export default jobSlice.reducer;
