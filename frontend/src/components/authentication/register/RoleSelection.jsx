import { RiUserReceivedLine } from "react-icons/ri";
import Nav from "../../ui/Nav";
import { BiUserCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { setRole } from "../../../redux/slices/registrationSlice";
// import PropTypes from "prop-types";

// Define the type for the props

const RoleSelection = ({ onSubmit }) => {
  console.log(onSubmit);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      className="h-auto min-h-screen bg-white"
      initialValues={{ role: "" }}
      onSubmit={(values) => {
        console.log("Form values in PersonalInfo:", values);
        dispatch(setRole(values.role));
        onSubmit(values);
      }}
    >
      <Form className="flex flex-col items-center justify-center h-full max-w-3xl gap-8 p-6 mx-auto mt-10">
        <nav>
          <Nav />
        </nav>
        <h1 className="text-3xl font-medium text-gray-900 text-wrap max-lg:text-md">
          Join as client or freelancer
        </h1>
        <div className="flex w-full gap-6 max-lg:flex-col">
          <div className="w-full p-6 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600 hover:border-2 ">
            <div className="flex items-center justify-between w-full mb-6">
              <RiUserReceivedLine className="text-gray-800" size={40} />
              <label className="relative flex items-center cursor-pointer">
                <Field
                  type="radio"
                  name="role"
                  value="client"
                  className="flex-1 w-8 h-8 p-2 transition-all duration-300 ease-in-out bg-gray-200 border-none outline-none peer-checked:bg-green-500 peer-checked:ring-2 peer-checked:ring-green-500"
                />
                {/* <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span> */}
              </label>
            </div>
            <span className="block p-3 text-xl font-semibold text-gray-800">
              I am a Client, hiring for projects
            </span>
          </div>
          {/* Freelancer Card */}
          <div className="w-full p-6 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600 hover:border-2 ">
            <div className="flex items-center justify-between mb-6">
              <BiUserCheck className="text-gray-800" size={40} />
              <label className="relative flex items-center cursor-pointer">
                <Field
                  type="radio"
                  name="role"
                  value="freelancer"
                  className="flex-1 w-8 h-8 p-2 transition-all duration-300 ease-in-out bg-gray-200 border-none outline-none peer-checked:bg-green-500 peer-checked:ring-2 peer-checked:ring-green-500"
                />
                {/* <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span> */}
              </label>
            </div>
            <span className="block p-3 text-xl font-semibold text-gray-800">
              I am a Freelancer, looking for jobs
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="px-8 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
            type="submit"
            onClick={() => navigate("/auth/personalInfo")}
          >
            Continue
          </button>
        </div>
        <div>
          <span className="text-gray-900"> Already have an account?</span>
          <span className="text-green-700 underline">Log In</span>
        </div>
      </Form>
    </Formik>
  );
};
RoleSelection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};
export default RoleSelection;
