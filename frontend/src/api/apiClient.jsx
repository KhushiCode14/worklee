import axios from "axios";
const apiBackend = axios.create({
  baseURL: import.meta.env.BACKEND_INTEGRATION,
  headers: {
    "Content-Type": "application/json", // Default header for all requests
  },
});
export default apiBackend;
