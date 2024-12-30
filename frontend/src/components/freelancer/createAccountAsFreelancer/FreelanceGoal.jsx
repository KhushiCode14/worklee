// import { BiCoinStack } from "react-icons/bi";
import { FaMobileScreenButton } from "react-icons/fa6";
import Card2 from "../../ui/Card2";
import { FaMoneyBillWave } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { setGoal } from "../../../redux/slices/freelancerSlice";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

5;

const FreelanceGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(setGoal(values.goal));
    console.log("Selected Experience:", values.experience);
    navigate("/freelancer/step6");
  };
  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step4"
      nextLink="/freelancer/step6"
    >
      <Formik onSubmit={handleSubmit} initialValues={{ goal: "" }}>
        {({ setFieldValue, errors, touched, handleSubmit }) => (
          <Form
            className="flex flex-col items-center justify-center w-full h-auto gap-8 px-4 py-8"
            onSubmit={handleSubmit}
          >
            {/* Header Section */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                What your biggest goal for freelancing?
              </h1>
              <p className="text-lg text-gray-600">
                Let&apos;s get started and understand your experience level.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card2
                text="I want to earn extra income"
                icon={FaMoneyBillWave}
                name="goal"
                onClick={() => setFieldValue("goal", "extra money")}
              />
              <Card2
                text="To make money on the side"
                icon={FaMoneyBillWave}
                name="goal"
                onClick={() => setFieldValue("goal", "side money")}
              />
              <Card2
                text="To get experience, for full time job"
                icon={FaMoneyBillWave}
                name="goal"
                onClick={() => setFieldValue("goal", "experience")}
              />
              <Card2
                text="I don't have a goal in mind yet"
                icon={FaMobileScreenButton}
                name="goal"
                onClick={() => setFieldValue("goal", "no goal")}
              />
              {errors.experience && touched.experience && (
                <p className="text-red-500">{errors.experience}</p>
              )}
              <button
                type="submit"
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ProgressBar>
  );
};

export default FreelanceGoal;
