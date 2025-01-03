// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BACKEND_INTEGRATION;
console.log("Backend URL with Slice:", BASE_URL);
if (!BASE_URL) {
  console.error(
    "Environment variable VITE_BACKEND_INTEGRATION is not defined."
  );
}
console.log("Backend URL:", import.meta.env.VITE_BACKEND_INTEGRATION);
const loginUrl = `${BASE_URL}/auth/login`;
console.log("login URL:", loginUrl);
// Async thunk to handle user login
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials, {
        withCredentials: true,
      });

      console.log("API Response:", response.data);
      console.log(response.data);
      // Use the dynamic URL
      return response.data; // Return the response data
    } catch (error) {
      const message = error.response?.data || error.message;
      console.error("Error in fetchUser:", message); // Log the error
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  role: null,
  userDetails: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
      state.userDetails = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // Set state on successful login
        state.user = action.payload.user;
        state.token = action.payload.token;

        // Decode JWT token and set userDetails
        try {
          const decoded = jwtDecode(action.payload.token);
          state.userDetails = decoded;
        } catch (error) {
          console.error("Error decoding JWT:", error);
          state.userDetails = null;
        }

        state.role = action.payload.role;
        state.loading = false;
        // Save token to localStorage
        localStorage.setItem("token", action.payload.token);
        toast.success("Login successful!");
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.loading = false;
        toast.error(state.error || "Login failed!");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
