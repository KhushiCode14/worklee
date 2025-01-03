import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import { FaEnvelope } from "react-icons/fa";
import * as Yup from "yup";
const Email = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="flex flex-col items-center justify-center h-full max-w-md gap-5 p-10 mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center">
            Enter your Email
          </h2>
          <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
            <span className="flex items-center justify-center p-2 bg-gray-200">
              <FaEnvelope className="text-gray-600" />
            </span>
            <Field
              type="email"
              name="email"
              id="email"
              aria-label="Enter your email"
              className="flex-1 p-2 bg-gray-200 border-none outline-none"
              placeholder="Email"
              required
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
              <button
                type="submit"
                className="flex-1 p-2 text-white bg-green-600 hover:bg-green-700 active:bg-green-800"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

Email.propTypes = {
  // email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Email;
