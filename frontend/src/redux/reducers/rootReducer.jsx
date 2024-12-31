import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import counterReducer from "../slices/countSlice";
import registerReducer from "../slices/registrationSlice";
import freelancerReducer from "../slices/freelancerSlice";
// import jobReducer from "../slices/jobSlices";

const rootReducer = (state, action) => {
  let reducers = {
    auth: authReducer,
    register: registerReducer,
    counter: counterReducer,
    freelancer: freelancerReducer,
    // job: jobReducer,  // Uncomment if needed
  };

  // console.log(reducers);
  // Conditionally include freelancerReducer based on role
  // state && state.register &&
  if (state?.register?.role === "freelancer") {
    reducers = {
      ...reducers,
      freelancer: freelancerReducer,
    };
    console.log("reducers freelancer: " + reducers);
    // console.log(reducers);
  }
  console.log("reducers all: " + reducers);

  return combineReducers(reducers)(state, action);
};

export default rootReducer;
