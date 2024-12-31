// configure store
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer
import rootReducer from "./reducers/rootReducer";
// setup store
const store = configureStore({
  // use reducer
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
});
console.log("store", store);

export default store;
