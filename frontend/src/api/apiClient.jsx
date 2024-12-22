import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json", // Default header for all requests
  },
});
export default apiClient;
