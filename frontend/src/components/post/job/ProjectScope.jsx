// src/components/ProjectScope.jsx

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setJobDetails } from "../../../redux/slices/jobSlices";
import { Button } from "../../ui/Button";
// Option Component
function Option({ value, id, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <Field type="radio" name="scope" value={value} id={id} className="mt-1" />
      <label htmlFor={id} className="grid gap-1 leading-none">
        <div className="text-2xl font-medium text-black">{title}</div>
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
export default function ProjectScope() {
  const options = [
    {
      value: "large",
      id: "large",
      title: "Large",
      description:
        "Longer term or complex initiatives (e.g., develop and execute a brand strategy (graphics, positioning)).",
    },
    {
      value: "medium",
      id: "medium",
      title: "Medium",
      description:
        "Well-defined projects (e.g., design business rebrand package (logos, icons)).",
    },
    {
      value: "small",
      id: "small",
      title: "Small",
      description:
        "Quick and straightforward tasks (e.g., create a logo for a new product).",
    },
  ];

  // Validation schema
  const validationSchema = Yup.object({
    scope: Yup.string().required("Please select a project scope."),
  });

  // Initial values
  const initialValues = { scope: "" };

  // Submit handler
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(setJobDetails({ scope: values.scope }));
    console.log("Form data", values);
    // alert(`You selected: ${values.projectScope}`);
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
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
            {errors.scope && touched.scope && (
              <div className="text-sm text-red-500">{errors.scope}</div>
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
