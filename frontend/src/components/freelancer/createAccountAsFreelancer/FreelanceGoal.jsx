import { FaMobileAlt, FaMoneyBillWaveAlt } from "react-icons/fa";
import Card2 from "../../ui/Card2";
import ProgressBar from "./ProgressBar";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setGoal } from "../../../redux/slices/freelancerSlice";
// import { setGoal } from "../../../redux/slices/freelancerSlice";

const FreelanceGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle the form submission logic
  const handleSubmit = (values) => {
    dispatch(setGoal(values.goal));
    // setGoal(values.goal);
    console.log("Selected Goal:", values.goal);
    console.log(values);
    // Call the passed onSubmit handler if available
    navigate("/freelancer/step6");
  };

  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step4"
      nextLink="/freelancer/step6"
    >
      <Formik
        initialValues={{ goal: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.goal) errors.goal = "Please select a goal.";
          return errors;
        }}
      >
        {({ setFieldValue, errors, touched, values }) => (
          <Form className="flex flex-col items-center justify-center w-full h-auto gap-8 px-4 py-8">
            {/* Header Section */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                What is your biggest goal for freelancing?
              </h1>
              <p className="text-lg text-gray-600">
                Let&apos;s get started and understand your goal.
              </p>
            </div>

            {/* Goal Selection Options */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["extra money", "side money", "experience", "no goal"].map(
                (goalType) => {
                  const icon =
                    goalType === "extra money" || goalType === "side money" ? (
                      <FaMoneyBillWaveAlt />
                    ) : (
                      <FaMobileAlt />
                    );

                  return (
                    <Card2
                      key={goalType}
                      text={`I want to ${goalType}`}
                      icon={icon}
                      name="goal"
                      onClick={() => setFieldValue("goal", goalType)}
                      className={
                        values.goal === goalType
                          ? "border-2 border-blue-500"
                          : ""
                      }
                    />
                  );
                }
              )}
            </div>

            {/* Error Message */}
            {errors.goal && touched.goal && (
              <p className="mt-2 text-red-500">{errors.goal}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`px-4 py-2 mt-4 text-white ${
                values.goal ? "bg-blue-500" : "bg-gray-400"
              } rounded hover:bg-blue-600`}
              disabled={!values.goal}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </ProgressBar>
  );
};
FreelanceGoal.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  setGoal: PropTypes.func,
  goal: PropTypes.string,
};

export default FreelanceGoal;
