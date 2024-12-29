import { FaApple, FaEye, FaGoogle } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import { Input } from "../../ui/Input";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";
import * as Yup from "yup";
import { setPersonalInfo } from "../../../redux/slices/registrationSlice";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  country: Yup.string().required("Country is required"),
});

const buttonStyles =
  "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";

const PersonalInfo = ({ onSubmit, role }) => {
  console.log("submit form", onSubmit);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(setPersonalInfo(values));
    setSubmitting(false);
    navigate("/auth/contactInfo");
  };

  return (
    <Formik
      className="h-screen "
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center justify-center h-full max-w-3xl gap-8 px-20 mx-auto mt-10 max-sm:px-5">
          <h1 className="text-3xl font-medium text-gray-900 text-nowrap max-md:text-base">
            {role === "freelancer"
              ? "Sign up to find work you love"
              : "Sign up to search talent"}
          </h1>
          <div className="flex w-full gap-3">
            <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
              <button
                className={`${buttonStyles} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 flex items-center justify-center sm:py-2 sm:px-4 py-3 px-6 rounded-lg`}
              >
                <FaGoogle className="mr-2 text-gray-600 sm:mr-4 max-sm:hidden" />
                <span className="text-sm sm:text-base max-sm:text-sm">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
              <button
                className={`${buttonStyles} flex items-center justify-center border border-black text-black hover:bg-gray-200`}
              >
                <FaApple className="text-gray-600" /> Continue with Apple
              </button>
            </div>
          </div>

          <div className="divider text-neutral-content divider-neutral">or</div>

          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-3">
              <div>
                <label htmlFor="firstName" className="text-black">
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full bg-white border-2 border-gray-300 label Input"
                />
                <ErrorMessage
                  name="firstName"
                  render={(msg) => (
                    <div className="text-sm text-red-500">{msg}</div> // Custom styling for error message
                  )}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-black">
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full bg-white border-2 border-gray-300 label Input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-black">
                Email
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                className="w-full bg-white border-2 border-gray-300 label Input"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <div className="relative">
                <Field
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-white border-2 border-gray-300 label Input"
                />
                <FaEye
                  onClick={togglePasswordVisibility}
                  className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
                  color="black"
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div>
              <label htmlFor="country" className="text-black">
                Country
              </label>
              <Field
                id="country"
                name="country"
                as="select"
                className="w-full bg-white border-2 border-gray-300 label Input"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </Field>
            </div>
          </div>

          <div>
            <label htmlFor="checkbox" className="flex justify-start gap-3">
              <Field type="checkbox"></Field>
              <p>
                {role === "freelancer"
                  ? "Send me helpful email to find rewarding work and jobs"
                  : "Send me helpful email to find talent "}
              </p>
            </label>
          </div>
          <div>
            <button
              className={`${buttonStyles} w-full text-white bg-green-600 hover:bg-green-700 active:bg-green-800${
                isSubmitting ? "cursor-not-allowed " : "cursor-pointer"
              }`}
              type="submit"
              disabled={isSubmitting}
              onClick={() => navigate("/auth/contactInfo")}
            >
              {role === "freelancer"
                ? "Create my account as Freelancer"
                : "Create my account as Client"}
            </button>
          </div>

          <div className="mb-3">
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a href="/auth/login" className="text-green-600 underline">
                Log in
              </a>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};
// firstName: "",
// lastName: "",
// email: "",
// password: "",
// country: "",
// phone: "",
// address: "",
PersonalInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  country: PropTypes.string,
  phone: PropTypes.string,
  role: PropTypes.string,
};

export default PersonalInfo;
