// src/components/authentication/Password.jsx
import { Formik, Form, Field } from "formik";
import { FaLock } from "react-icons/fa";

const Password = ({ email, onSubmit }) => {
  return (
    <Formik initialValues={{ password: "" }} onSubmit={onSubmit}>
      {() => (
        <Form className="flex flex-col items-center justify-center h-full max-w-md gap-5 p-10 mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center">
            Enter your Password
          </h2>
          <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
            <span className="flex items-center justify-center p-2 bg-gray-200">
              <FaLock className="text-gray-600" />
            </span>
            <Field
              type="password"
              name="password"
              id="password"
              className="flex-1 p-2 bg-gray-200 border-none outline-none"
              placeholder="Password"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
              <button
                type="submit"
                className="flex-1 p-2 text-white bg-green-600 hover:bg-green-700 active:bg-green-800"
              >
                Log In
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Password;
