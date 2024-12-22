// src/components/authentication/Login/Login.jsx
import { FaApple, FaGoogle, FaUser } from "react-icons/fa6";
import Nav from "../../ui/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { fetchUser } from "../../../redux/slices/authSlice";
import Password from "./Password"; // Import the existing Password component
import { useEffect, useState } from "react";
import Icon from "../../ui/Icon";
import { jwtDecode } from "jwt-decode";
const buttonStyles =
  "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.token);
  const [step, setStep] = useState(1); // Manage current step (1 for email, 2 for password)
  const [email, setEmail] = useState(""); // Store email temporarily

  // Handle form submission for Step 1 (Email)
  const handleEmailSubmit = (values) => {
    setEmail(values.email);
    setStep(2); // Move to password step
  };

  // Handle form submission for Step 2 (Password)
  const handlePasswordSubmit = (values) => {
    dispatch(fetchUser({ email, password: values.password }))
      .unwrap()
      // Redirect on success
      .catch((err) => console.error(err)); // Handle errors
  };
  useEffect(() => {
    if (token) {
      console.log("token", token);
      try {
        // Attempt to redirect to dashboard if token exists
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        const userType = decoded.role || decoded.userType || decoded.type;
        console.log("user", userType);

        if (userType === "client") {
          navigate("/client/dashboard");
        }

        if (userType === "freelancer") {
          navigate("/freelancer/profile");
        } else {
          navigate("/auth/login");
        }
      } catch (error) {
        console.error(error);
        navigate("/auth/login");
      }
    }
  }, [token]);
  return (
    <section className="text-black">
      <nav>
        <Nav />
      </nav>

      {step === 1 && (
        <Formik
          initialValues={{ email: "" }} // Initial form values for email step
          onSubmit={handleEmailSubmit} // Submit handler for email
        >
          {() => (
            <Form className="flex flex-col items-center justify-center h-full max-w-md gap-5 p-10 mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-center">
                Log in to Upwork
              </h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
                <span className="flex items-center justify-center p-2 bg-gray-200">
                  <FaUser className="text-gray-600" />
                </span>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="flex-1 p-2 bg-gray-200 border-none outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
                  <button
                    type="submit"
                    className={`${buttonStyles} bg-green-600 text-white hover:bg-green-700 active:bg-green-800`}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Loading..." : "Continue"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Password email={email} onSubmit={handlePasswordSubmit} /> // Reuse your Password component
      )}

      <div className="divider text-neutral-content divider-neutral ">or</div>
      <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
        <button
          className={`${buttonStyles} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 flex items-center justify-center sm:py-2 sm:px-4 py-3 px-6 rounded-lg`}
        >
          <Icon icon={FaGoogle} variant="solid" />
          <span className="text-sm sm:text-base">Continue with Google</span>
        </button>
      </div>

      <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
        <button
          className={`${buttonStyles} flex items-center justify-center border border-black text-black hover:bg-gray-200`}
        >
          <FaApple className="text-gray-600" /> Continue with Apple
        </button>
      </div>
      <span> Dont have an Upwork account? </span>
    </section>
  );
};

export default Login;
