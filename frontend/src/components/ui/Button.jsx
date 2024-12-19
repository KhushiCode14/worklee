// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Button = ({
  children,
  variant = "default",
  className = "",
  links,
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    default: "bg-green-600 text-white hover:bg-green-500 focus:ring-green-300",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
  };

  if (links) {
    // If `links` prop is passed, use a Link or anchor tag
    return (
      <Link
        to={links}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Props validation using PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures the `children` prop is provided and can be any renderable content
  variant: PropTypes.oneOf(["default", "outline"]), // Restricts `variant` to either 'default' or 'outline'
  className: PropTypes.string, // Ensures `className` is a string
  // Validates any additional props passed to the button
  links: PropTypes.string,
  onClick: PropTypes.func, // Ensures `onClick` is a function, if provided
};

Button.defaultProps = {
  variant: "default",
  className: "",
};
