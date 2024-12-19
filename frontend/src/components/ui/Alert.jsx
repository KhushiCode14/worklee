import PropTypes from "prop-types";

export function Alert({ children, variant = "default" }) {
  const baseClasses = "rounded-lg border p-4";
  const variantClasses = {
    default: "bg-gray-100 border-gray-200 text-gray-900",
    destructive: "bg-red-100 border-red-200 text-red-900",
  };

  return (
    <div role="alert" className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be provided and can contain any renderable content
  variant: PropTypes.oneOf(["default", "destructive"]), // Restricts `variant` to the defined set of values
};

Alert.defaultProps = {
  variant: "default", // Default value for `variant` prop
};

export function AlertDescription({ children }) {
  return <div className="text-sm">{children}</div>;
}

AlertDescription.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be provided and can contain any renderable content
};
