// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = import.meta.env.VITE_BACKEND_INTEGRATION;
console.log("Backend URL with Slice:", BASE_URL);
if (!BASE_URL) {
  console.error(
    "Environment variable VITE_BACKEND_INTEGRATION is not defined."
  );
}

// Async thunk to handle user login
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
      console.log(response.data);
      // Use the dynamic URL
      return response.data; // Return the response data
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from the server
    }
  }
);

const initialState = {
  user: null,
  token: null,
  role: null,
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
        state.user = action.payload.user;
        state.token = action.payload.token;

        const decoded = jwtDecode(action.payload.token);
        state.userDetails = decoded;
        state.role = action.payload.role;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
