import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/countSlice";
import rootReducer from "./reducers/rootReducer";
const store = configureStore({
  // Define your reducers here
  reducer: rootReducer,
  // count: counterReducer,
});

export default store;
