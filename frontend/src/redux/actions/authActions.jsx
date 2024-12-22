import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../slices/authSlice";
export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("localhost:5000/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    dispatch(loginSuccess({ user: response.data.user, token: response.token }));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};
