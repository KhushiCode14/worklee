import { Field, Formik, Form } from "formik";
import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../redux/slices/freelancerSlice";
import { useNavigate } from "react-router-dom";

// import { RxCross2 } from "react-icons/rx";
9;
// import React from "react";

const FreelancerTitle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(setTitle(values.title));
    console.log(values);
    navigate("/freelancer/step10");
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ title: "" }}>
      {() => (
        <Form>
          <ProgressBar
            backButtonText="Go Back"
            nextButtonText="Proceed"
            backLink="/freelancer/step8"
            nextLink="/freelancer/step10"
          >
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
              <main className="flex flex-col items-center w-full h-screen max-w-3xl">
                <div className="w-full mb-8 text-center">
                  <p className="text-sm text-gray-500">4/10</p>
                  <h1 className="mb-2 text-2xl font-bold">
                    Got it. Now, add a title to tell the world what you do.
                  </h1>
                  <p className="text-gray-600">
                    It’s the very first thing clients see, so make it count.
                    Stand out by describing your expertise in your own words.
                  </p>
                </div>
                <div className="w-full mb-8">
                  <label className="block mb-2 text-gray-700">
                    Your professional role
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      placeholder="Data Entry & Transcription Services | Twitter/X, X++, macOS, Algebra"
                      className="w-full p-2 border rounded bg-gray-50"
                      name="title"
                      // onChange={(value) => setFieldValue(value.title)}
                      // readOnly
                    />
                    <i className="absolute text-gray-500 fas fa-times right-3 top-3"></i>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded">
                    Back
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded"
                    type="submit"
                  >
                    Next, add your experience
                  </button>
                </div>
              </main>
            </div>
          </ProgressBar>
        </Form>
      )}
    </Formik>
  );
};

export default FreelancerTitle;
