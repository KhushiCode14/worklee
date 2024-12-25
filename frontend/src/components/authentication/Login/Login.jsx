import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../redux/slices/authSlice";
import Email from "./Email";
import Password from "./Password";

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
  // console.log("Base url with vite", import.meta.env.VITE_BACKEND_INTEGRATION);
  // Handle form submission for Step 2 (Password)
  const handlePasswordSubmit = async (values) => {
    const credentials = { email, password: values.password };
    try {
      const result = await dispatch(fetchUser(credentials));
      if (fetchUser.fulfilled.match(result)) {
        console.log("Login Successful:", result.payload);
      } else {
        console.error("Login Failed:", result.error.message);
      }
    } catch (error) {
      console.error("Error in Dispatch:", error);
    }
  };

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
