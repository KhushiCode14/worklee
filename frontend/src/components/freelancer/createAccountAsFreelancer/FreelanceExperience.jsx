import Card2 from "../../ui/Card2";
import { FaRocket } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setExperience } from "../../../redux/slices/freelancerSlice";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const FreelanceExperience = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesubmit = (values) => {
    dispatch(setExperience(values.experience));
    console.log("Selected Experience:", values.experience);
    navigate("/freelancer/step5");
  };

  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step3"
      nextLink="/freelancer/step5"
    >
      <Formik
        initialValues={{ experience: "" }}
        onSubmit={handlesubmit}
        validate={(values) => {
          const errors = {};
          if (!values.experience) {
            errors.experience = "Please select an option.";
          }
          return errors;
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="flex flex-col items-center justify-center h-auto gap-8 px-4 py-8">
            {/* Header Section */}
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                A Few Quick Questions: Have You Freelanced Before?
              </h1>
              <p className="text-lg text-gray-600">
                Let&apos;s get started and understand your experience level.
              </p>
            </div>

            {/* Options */}
            <div className="flex gap-2 max-sm:flex-wrap sm:flex max-sm:gap-4">
              <Card2
                text="I am new to this"
                icon={FaRocket}
                name="experience"
                onClick={() => setFieldValue("experience", "new")}
              />
              <Card2
                text="I have some experience"
                icon={IoGitCompareSharp}
                name="experience"
                onClick={() => setFieldValue("experience", "some-experience")}
              />
              <Card2
                text="I am an expert"
                icon={MdOutlineExplore}
                name="experience"
                onClick={() => setFieldValue("experience", "expert")}
              />
            </div>
            {errors.experience && touched.experience && (
              <p className="text-red-500">{errors.experience}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </ProgressBar>
  );
};

export default FreelanceExperience;
