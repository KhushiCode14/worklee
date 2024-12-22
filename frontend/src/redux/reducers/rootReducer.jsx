import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
// import jobReducer from "../slices/jobSlices";
import counterReducer from "../slices/countSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  // jobs: jobReducer,
  counter: counterReducer, // Add your other slices here if needed
});

export default rootReducer;
