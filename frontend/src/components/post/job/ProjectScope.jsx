// src/components/ProjectScope.jsx
// import { useState } from "react";
import { Input } from "../../ui/Input";
import PropTypes from "prop-types";

// Option Component
function Option({ value, id, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <Input
        type="radio"
        value={value}
        id={id}
        name="project-scope"
        className="mt-1"
      />
      <label htmlFor={id} className="grid gap-1 leading-none">
        <div className="text-2xl font-medium text-black">{title}</div>
        <div className="text-gray-700 text-md">{description}</div>
      </label>
      {/* {newOption && (
        <div className="text-red-500 text-md">
          You&apos;ve already added this option. Select another.
        </div>
      )} */}
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

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <form className="space-y-6">
        {options.map((option) => (
          <Option
            key={option.id}
            value={option.value}
            id={option.id}
            title={option.title}
            description={option.description}
          />
        ))}
      </form>
    </div>
  );
}
