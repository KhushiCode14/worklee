import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  role: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  },
  contactInfo: {
    country: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
    state: "",
    dob: "",
  },
  status: null, // "loading", "succeeded", "failed"
  error: null, // Stores error messages
};
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (registrationData, { getState }) => {
    const state = getState().register; // Access current state
    const payload = {
      role: state.role,
      personalInfo: state.personalInfo,
      contactInfo: state.contactInfo,
      ...registrationData, // Optional: Merge with additional data passed in dispatch
    };
    console.log("payload", payload);
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      payload
    );
    console.log("response.data", response.data);
    return response.data;
  }
);

console.log("registerUser", registerUser);
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setContactInfo: (state, action) => {
      // console.log("State before update:", state);
      // console.log("State before update:", JSON.parse(JSON.stringify(state)));
      // return { ...state, contactInfo: action.payload };
      // console.log("State before update:", state);
      state.contactInfo = action.payload;
      console.log("Contact Info Updated:", {
        before: JSON.parse(JSON.stringify(state.contactInfo)),
        after: action.payload,
      });
      //         console.log("State after update:", JSON.parse(JSON.stringify(state)));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
        toast.success("Registration successful!");
        state.error = null; // Clear any previous errors
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";

        const errorMessage =
          action.error.response?.data?.message ||
          action.error.message ||
          "Registration failed!";

        // Log the error details to the console
        console.log("Error Details:", action.error);
        console.log("Error Message:", errorMessage);

        // Set the error message for the state
        state.error = action.error.message && errorMessage;

        // Show toast notification with error message
        toast.error(state.error || "Registration failed!");
      });
  },
});
export const { setRole, setPersonalInfo, setContactInfo } =
  registerSlice.actions;
export default registerSlice.reducer;
