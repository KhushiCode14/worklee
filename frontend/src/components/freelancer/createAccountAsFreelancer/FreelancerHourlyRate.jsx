import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import { Field, Form, Formik } from "formik";
import {
  setHourlyRate,
  setYouGet,
} from "../../../redux/slices/freelancerSlice";
import * as Yup from "yup";

const FreelancerHourlyRate = () => {
  return (
    <section className="w-full p-6 bg-white dark:bg-gray-900">
      {/* Progress Bar */}
      <ProgressBar
        backButtonText="Go Back"
        nextButtonText="Proceed"
        backLink="/freelancer/step12"
        nextLink="/freelancer/previewProfile"
      >
        <Card />
      </ProgressBar>
    </section>
  );
};

export default FreelancerHourlyRate;

const Card = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    hourlyRate: Yup.number()
      .positive("Hourly rate must be positive")
      .required("Hourly rate is required"),
  });

  const handleSubmit = (values) => {
    dispatch(setHourlyRate(values.hourlyRate));
    dispatch(setYouGet(values.youget));
    console.log("Form submitted", values);
    // Submit form data to the server here
  };

  return (
    <Formik
      initialValues={{ hourlyRate: 0, serviceRate: 0, youget: 0 }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        const handleHourlyRateChange = (e) => {
          const newHourlyRate = parseFloat(e.target.value) || 0;
          const serviceRate = newHourlyRate * 0.1;
          const youget = newHourlyRate * 0.9;

          setFieldValue("hourlyRate", newHourlyRate);
          setFieldValue("serviceRate", serviceRate);
          setFieldValue("youget", youget);
        };

        return (
          <Form>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              {/* Hourly Rate */}
              <div className="flex justify-between w-full p-4 mb-4 bg-white rounded-md dark:bg-gray-700">
                <div className="flex flex-col">
                  <span className="text-2xl text-black dark:text-white">
                    Hourly rate
                  </span>
                  <span className="text-gray-400 dark:text-gray-300">
                    Total amount the client will see.
                  </span>
                </div>
                <div>
                  <Field
                    id="hourlyRate"
                    type="number"
                    name="hourlyRate"
                    placeholder="$00.00/hr"
                    value={values.hourlyRate}
                    onChange={handleHourlyRateChange}
                    className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Service Rate */}
              <div className="flex justify-between w-full p-4 mb-4 bg-white rounded-md dark:bg-gray-700">
                <div className="flex flex-col">
                  <span className="text-2xl text-black dark:text-white">
                    Service rate
                  </span>
                  <span className="text-gray-400 dark:text-gray-300">
                    This helps us run the platform and provide services like
                    payment and customer support.
                  </span>
                </div>
                <div>
                  <Field
                    id="serviceRate"
                    type="number"
                    name="serviceRate"
                    placeholder="$00.00/hr"
                    value={values.serviceRate}
                    readOnly
                    className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Amount You'll Get */}
              <div className="flex justify-between w-full p-4 bg-white rounded-md dark:bg-gray-700">
                <div className="flex flex-col">
                  <span className="text-2xl text-black dark:text-white">
                    You’ll get
                  </span>
                  <span className="text-gray-400 dark:text-gray-300">
                    This is the estimated amount you’ll receive after service
                    fees.
                  </span>
                </div>
                <div>
                  <Field
                    id="youget"
                    type="number"
                    name="youget"
                    placeholder="$00.00/hr"
                    value={values.youget}
                    readOnly
                    className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
