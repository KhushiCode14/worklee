// import { Button } from "../../ui/Button";

import BackNext from "./BackNext";
import ReactSelect from "../../project/ReactSelect";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { setJobDetails } from "../../../redux/slices/jobSlices";

const JobSkill = () => {
  const backLink = "/job-post/title";
  const nextLink = "/job-post/duration";
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(setJobDetails({ skills: values.skills }));
    console.log("Selected skills:", values.skills);
  };
  return (
    <Formik initialValues={{ skills: [] }} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form>
          <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
            <div className="container flex flex-wrap items-center justify-center w-full max-w-6xl gap-24 px-4 py-10 mx-auto">
              <div className="flex flex-col max-w-md space-y-4">
                <h2 className="text-5xl font-bold leading-tight text-black">
                  What are the main skills required for your work?
                </h2>
              </div>
              <div className="max-w-xl space-y-6">
                <label
                  htmlFor="skills"
                  className="text-[#181818] block font-medium mb-2"
                >
                  Search skills or add your own
                </label>
                <div className="flex flex-col w-full space-y-4">
                  <ReactSelect
                    onChange={(selected) =>
                      setFieldValue(
                        "skills",
                        selected.map((s) => s.value)
                      )
                    }
                    value={values.skills}
                  />
                </div>
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
            <BackNext value={32} backLink={backLink} nextLink={nextLink} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JobSkill;
