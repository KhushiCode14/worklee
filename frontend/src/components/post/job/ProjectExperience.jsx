// src/components/ProjectExperience.jsx
// import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setJobDetails } from "../../../redux/slices/jobSlices";
import { Formik, Form, Field } from "formik";
import { Button } from "../../ui/Button";

// Option Component
function Option({ value, id, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      {/* <span>levelOfExperience</span> */}
      <Field
        type="radio"
        value={value}
        id={id}
        name="levelOfExperience"
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
export default function ProjectExperience() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(setJobDetails({ levelOfExperience: values.levelOfExperience }));
    console.log("Selected Experience:", values.levelOfExperience);
  };

  const options = [
    {
      value: "entry",
      id: "entry",
      title: "Entry",
      description: "Looking for someone relatively new to the field.",
    },
    {
      value: "intermediate",
      id: "intermediate",
      title: "Intermediate",
      description:
        "Looking for someone with a good amount of experience in the field.",
    },
    {
      value: "expert",
      id: "expert",
      title: "Expert",
      description:
        "Looking for comprehensive and deep experience in the field.",
    },
  ];

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <Formik initialValues={{ levelOfExperience: "" }} onSubmit={handleSubmit}>
        {() => (
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
