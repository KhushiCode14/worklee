import apiBackend from "./apiClient";
const Auth = {
  register: async (data) => apiBackend.post("/register", data),
  login: async (data) => apiBackend.post("/login", data),
};
export default Auth;
