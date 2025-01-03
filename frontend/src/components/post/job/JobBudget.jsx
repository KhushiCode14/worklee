import { MdOutlineDiscount } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import BackNext from "./BackNext";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useCallback } from "react";
import { setJobDetails } from "../../../redux/slices/jobSlices";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";

const JobBudget = () => {
  const backLink = "/job-post/duration";
  const nextLink = "/job-post/add-description";
  const dispatch = useDispatch();

  const initialValues = {
    type: "", // Empty initial value for type
    amount: 0,
    minRate: 0,
    maxRate: 0,
  };

  const handleSubmit = useCallback(
    (values) => {
      const { type, amount, minRate, maxRate } = values;

      let budgetDetails;
      if (type === "hourly") {
        budgetDetails = { type, hourly_rate: { min: minRate, max: maxRate } };
      } else if (type === "fixed") {
        budgetDetails = { type, amount };
      }

      // Dispatch to Redux
      dispatch(setJobDetails({ budget: budgetDetails }));
      console.log("Submitted values:", budgetDetails);
    },
    [dispatch]
  );

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values }) => (
        <Form>
          <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
            <div className="container flex flex-wrap items-center justify-center max-w-6xl gap-16 px-4 py-10 mx-auto">
              <div className="flex flex-col max-w-md space-y-4">
                <h2 className="text-4xl font-bold leading-tight text-black">
                  Tell us about your budget.
                </h2>
                <p className="text-gray-800">
                  This will help us match you to talent within your range.
                </p>
              </div>
              <div className="max-w-xl space-y-6">
                <div className="flex flex-wrap w-full gap-6">
                  <div className="w-full p-6 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600">
                    <div className="flex items-center justify-between mb-6">
                      <BiUserCheck className="text-gray-800" size={40} />
                      <label className="relative flex items-center cursor-pointer">
                        <Field
                          type="radio"
                          name="type"
                          value="hourly"
                          className="hidden peer"
                        />
                        <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span>
                      </label>
                    </div>
                    <span className="block p-3 text-xl font-semibold text-gray-800">
                      Hourly rate
                    </span>
                  </div>
                  <div className="w-full p-6 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600">
                    <div className="flex items-center justify-between mb-6">
                      <MdOutlineDiscount className="text-gray-800" size={40} />
                      <label className="relative flex items-center cursor-pointer">
                        <Field
                          type="radio"
                          name="type"
                          value="fixed"
                          className="hidden peer"
                        />
                        <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span>
                      </label>
                    </div>
                    <span className="block p-3 text-xl font-semibold text-gray-800">
                      Fixed price
                    </span>
                  </div>
                </div>
                <p>
                  Set a price for the project and pay at the end, or you can
                  divide the project into milestones and pay as each milestone
                  is completed.
                </p>
                <p className="text-black">
                  What is the best cost estimate for your project?
                </p>
                <p>
                  You can negotiate this cost and create milestones when you
                  chat with your freelancer.
                </p>

                {/* Conditionally render fields based on selected type */}
                {values.type === "fixed" ? (
                  <div className="space-y-4">
                    <label
                      htmlFor="amount"
                      className="block text-lg text-gray-700"
                    >
                      Budget Amount
                    </label>
                    <Field
                      name="amount"
                      type="number"
                      className="w-full p-3 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter total amount"
                    />
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      <label
                        htmlFor="minRate"
                        className="block text-lg text-gray-700"
                      >
                        Min Rate
                      </label>
                      <Field
                        name="minRate"
                        type="number"
                        className="w-full p-3 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter minimum rate"
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="maxRate"
                        className="block text-lg text-gray-700"
                      >
                        Max Rate
                      </label>
                      <Field
                        name="maxRate"
                        type="number"
                        className="w-full p-3 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter maximum rate"
                      />
                    </div>
                  </>
                )}

                <div className="mt-7">
                  <Link
                    to="/"
                    className="mt-5 font-medium text-green-600 hover:underline"
                  >
                    Not ready to set a budget?
                  </Link>
                  <Button
                    type="submit"
                    className="w-full py-3 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <BackNext value={64} backLink={backLink} nextLink={nextLink} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JobBudget;
