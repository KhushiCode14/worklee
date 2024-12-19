import PropTypes from "prop-types";

const Icon = ({
  icon: IconComponent,
  variant = "solid",
  className = "",
  //   text = "text-52",
  ...props
}) => {
  const baseClasses = "font-medium text-base";
  const variantClasses = {
    solid: "text-pink-900 ",
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

// Define PropTypes for the Icon component
Icon.propTypes = {
  icon: PropTypes.func.isRequired, // The icon component should be a function
  variant: PropTypes.oneOf(["solid", "outline"]), // Allow "solid" or "outline" values for variant
  className: PropTypes.string, // Optional className for extra styling
  text: PropTypes.string,
  //   height: PropTypes.string,
};

export default Icon;
