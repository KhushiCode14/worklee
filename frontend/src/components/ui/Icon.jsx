import PropTypes from "prop-types";

const Icon = ({
  icon: IconComponent,
  variant = "solid",
  className = "",
  ...props
}) => {
  const baseClasses = "font-medium text-base";
  const variantClasses = {
    solid: "text-green-500 ",
    outline: "text-gray-400",
  };

  return (
    <div>
      <IconComponent
        {...props}
        className={` ${variantClasses[variant]} ${baseClasses} ${className}`}
      />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensure it's a React component
  variant: PropTypes.oneOf(["solid", "outline"]),
  className: PropTypes.string,
};

export default Icon;
