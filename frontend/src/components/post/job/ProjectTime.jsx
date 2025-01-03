// src/components/ProjectScope.jsx

import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setJobDetails } from "../../../redux/slices/jobSlices";
import { Button } from "../../ui/Button";

// Option Component
function Option({ value, id, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <Field
        type="radio"
        name="duration"
        value={value}
        id={id}
        className="mt-1"
      />
      <label htmlFor={id} className="grid gap-1 leading-none">
        <div className="text-xl font-medium text-black">{title}</div>
        <div className="text-gray-700 text-md">{description}</div>
      </label>
    </div>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Main Component
export default function ProjectTime() {
  const dispatch = useDispatch();

  const options = [
    {
      value: "1to3months",
      id: "1to3months",
      title: "1 to 3 months",
      description:
        "Longer term or complex initiatives (e.g., develop and execute a brand strategy (graphics, positioning)).",
    },
    {
      value: "3to6months",
      id: "3to6months",
      title: "3 to 6 months",
      description:
        "Well-defined projects (e.g., design business rebrand package (logos, icons)).",
    },
    {
      value: "morethan6months",
      id: "morethan6months",
      title: "More than 6 months",
      description:
        "Quick and straightforward tasks (e.g., create a logo for a new product).",
    },
  ];

  const initialValues = { duration: "" };

  const handleSubmit = (values) => {
    dispatch(setJobDetails({ duration: values.duration }));
    console.log("Submitted Duration:", values.duration);
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="space-y-6">
            {options.map((option) => (
              <Option
                key={option.id}
                value={option.value}
                id={option.id}
                title={option.title}
                description={option.description}
              />
            ))}
            {errors.duration && touched.duration && (
              <div className="text-sm text-red-500">{errors.duration}</div>
            )}
            <Button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
