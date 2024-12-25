import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import counterReducer from "../slices/countSlice";
import registerReducer from "../slices/registrationSlice";
// import jobReducer from "../slices/jobSlices";
const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  // job: jobReducer,
  counter: counterReducer,
});

export default rootReducer;
