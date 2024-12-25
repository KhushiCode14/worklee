import { Formik, Form, Field } from "formik";
import { FaEnvelope } from "react-icons/fa";

const Email = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
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

export default Email;
