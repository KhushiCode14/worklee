import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import formReducer from "./auth/formSlice";
const store = configureStore({
  // Define your reducers here
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});

export default store;
