import ProgressBar from "./ProgressBar";
import { Formik, Form, Field, FieldArray } from "formik";
import { useDispatch } from "react-redux";
import { setLanguages } from "../../../redux/slices/freelancerSlice";

const FreelancerLanguage = () => {
  const levels = ["Beginner", "Intermediate", "Advanced", "Native"];

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(setLanguages(values.languages)); // Dispatch languages array to redux
    console.log(values.languages); // For logging
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        languages: [{ language: "English", proficiency: "Basic" }],
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <ProgressBar
            backButtonText="Go Back"
            nextButtonText="Proceed"
            backLink="/freelancer/step10"
            nextLink="/freelancer/step12"
          >
            <section className="p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-semibold text-black dark:text-green-500">
                  Looking good. Next, tell us which languages you speak
                </h1>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Upwork is global, so clients are often interested in
                  freelancers who speak multiple languages. English is a must,
                  but do you speak any other languages?
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-gray-700">
                      <th className="px-4 py-2">Language</th>
                      <th className="px-4 py-2">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <FieldArray
                      name="languages"
                      render={() => (
                        <>
                          {values.languages.map((item, index) => (
                            <tr key={index} className="p-2 text-center">
                              <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                                <Field
                                  type="text"
                                  name={`languages[${index}].language`}
                                  value={item.language}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `languages[${index}].language`,
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-2 py-1 text-gray-700 bg-white border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                  placeholder="Enter language"
                                />
                              </td>
                              <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                                <Field
                                  as="select"
                                  name={`languages[${index}].proficiency`}
                                  className="w-full px-2 py-1 text-gray-700 bg-white border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                >
                                  {levels.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </Field>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    />
                  </tbody>
                </table>

                <button
                  type="button"
                  onClick={() =>
                    setFieldValue("languages", [
                      ...values.languages,
                      { language: "", proficiency: "Basic" },
                    ])
                  }
                  className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Add Language
                </button>
              </div>
            </section>
            <div className="flex justify-between w-full mt-4">
              <button
                type="button"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
                onClick={() => window.history.back()}
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded"
              >
                Next, add your experience
              </button>
            </div>
          </ProgressBar>
        </Form>
      )}
    </Formik>
  );
};

export default FreelancerLanguage;
