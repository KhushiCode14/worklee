import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import counterReducer from "../slices/countSlice";
import registerReducer from "../slices/registrationSlice";
import freelancerReducer from "../slices/freelancerSlice";
import jobReducer from "../slices/jobSlices";

const rootReducer = (state, action) => {
  let reducers = {
    auth: authReducer,
    job: jobReducer,
    register: registerReducer,
    counter: counterReducer,
    // freelancer:
    //   state?.register?.role === "freelancer" ? freelancerReducer : undefined,
  };
  // console.log("authReducer:", authReducer);
  // console.log("jobReducer:", jobReducer);
  // console.log("registerReducer:", registerReducer);
  // console.log("authReducer function:", typeof authReducer);
  // console.log("jobReducer function:", typeof jobReducer);
  // console.log(reducers);

  // Conditionally add freelancerReducer if the role is 'freelancer'
  if (state?.register?.role === "freelancer") {
    reducers.freelancer = freelancerReducer;
  }

  // console.log("reducers all: " + reducers, JSON.stringify(reducers, null, 2));
  console.log(
    "Reducers before combine:",
    JSON.stringify(
      reducers,
      (key, value) => (typeof value === "function" ? value.name : value),
      2
    )
  );
  // const combinedReducers = combineReducers(reducers);
  // console.log("combinedReducers:", combinedReducers);
  return combineReducers(reducers)(state, action);
};

export default rootReducer;
