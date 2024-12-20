import { FaPlus } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";

const OtherExperience = () => {
  return (
    <div className="w-full p-5 border-gray-300 border-y">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-4xl font-semibold text-gray-800">
          Other Experiences
        </h2>
        <FaPlus
          size={40}
          color="green"
          className="p-2 transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-100"
        />
      </div>

      {/* Experience Item Section */}
      <div className="flex flex-col items-center justify-center gap-3 text-gray-900">
        <FcOpenedFolder size={150} />
        <div className="flex flex-col items-center justify-center gap-3 text-black">
          <p className="text-lg font-medium">
            Add any other experiences that help you stand out
          </p>
          <p>
            <button className="font-semibold text-green-600 transition duration-200 hover:underline">
              Add an experience
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherExperience;
