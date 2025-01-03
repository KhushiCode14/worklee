import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../redux/slices/authSlice";
import Email from "./Email";
import Password from "./Password";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1); // Manage current step (1 for email, 2 for password)
  const [email, setEmail] = useState(""); // Store email temporarily

  // Handle form submission for Step 1 (Email)
  const handleEmailSubmit = (values) => {
    setEmail(values.email);
    setStep(2); // Move to password step
  };
  // console.log("Base url", import.meta.env.BACKEND_INTEGRATION);
  console.log("Backend URL:", import.meta.env.VITE_BACKEND_INTEGRATION);
  if (!import.meta.env.VITE_BACKEND_INTEGRATION) {
    console.error(
      "Environment variable VITE_BACKEND_INTEGRATION is not defined."
    );
  }
  const navigate = useNavigate();

  // console.log("Base url with vite", import.meta.env.VITE_BACKEND_INTEGRATION);
  // Handle form submission for Step 2 (Password)
  const handlePasswordSubmit = async (values) => {
    const credentials = { email, password: values.password };
    try {
      const result = await dispatch(fetchUser(credentials));
      console.log("Dispatch Result:", result);
      if (result.meta.requestStatus === "fulfilled") {
        console.log("Login Successful:", result.payload);
        const token = localStorage.getItem("token");
        try {
          if (token) {
            const decodedToken = jwtDecode(token);
            console.log(JSON.stringify(decodedToken));
            console.log(
              "decoded token here",
              JSON.stringify(decodedToken, null, 2)
            );
            const role = decodedToken?.role;
            console.log(role);
            if (role === "freelancer") {
              navigate("/freelancer/step1");
            }
            if (role === "client") {
              navigate("/client/dashboard");
            }
          }
        } catch (error) {
          console.error("Error in Dispatch:", error);
        }
      } else {
        console.error("Login Failed:", result.error.message);
      }
    } catch (error) {
      console.error("Error in Dispatch:", error);
    }
  };
  console.log(localStorage.getItem("token"));

  return (
    <div className="login-container">
      {step === 1 ? (
        <Email onSubmit={handleEmailSubmit} />
      ) : (
        <Password email={email} onSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
};

export default Login;
