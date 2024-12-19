// import React from "react";
import PropTypes from "prop-types";

export function Input({ label, icon, className = "", onClick, ...props }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="mb-1 text-sm font-medium text-gray-700"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <span className="absolute text-gray-500 left-3">{icon}</span>}
        <input
          className={`w-full px-3 py-2 bg-gray-100 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
            icon ? "pl-10" : ""
          } ${className}`}
          {...props}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

// Props validation using PropTypes
Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};
