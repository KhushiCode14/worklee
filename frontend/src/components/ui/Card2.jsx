// import { FaAlignJustify } from "react-icons/fa";
import Icon from "./Icon";
import { Input } from "./Input";
import PropTypes from "prop-types";

const Card2 = ({ icon, text, type = "radio", name }) => {
  return (
    <div className="flex flex-col w-full bg-white border rounded-lg shadow-xl min-w-64 min-h-60">
      {/* Card Header */}
      <div className="flex items-start justify-center p-4 rounded-t-lg ">
        <div className="flex items-center justify-center flex-1 w-56 min-h-44">
          <Icon icon={icon} className="text-gray-700 text-8xl" />
        </div>
        {/* Radio Input Section */}
        <div className="p-2 pt-0">
          <Input
            type={type}
            name={name}
            className="border-gray-300 appearance-none radio radio-lg radio-success checkbox-lg checked:bg-green-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-400 dark:border-gray-600 dark:checked:bg-green-600"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 text-start card-body">
        <p className="text-lg text-gray-700">{text}</p>
      </div>
    </div>
  );
};
Card2.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Card2;
