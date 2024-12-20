import { FaStar } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const JobReviewByClient = () => {
  return (
    <div className="flex flex-col w-full gap-5 py-4 pl-3 pr-4 transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100">
      {/* Job Title Section */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-green-600 cursor-pointer sm:text-3xl hover:underline">
          Title of job
        </h2>
      </div>

      {/* Rating and Date Section */}
      <div className="flex items-center w-full gap-3 text-black max-sm:flex-col">
        <h3 className="flex gap-1">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
        </h3>
        <h3 className="text-lg">5.00</h3>
        <h3 className="text-sm text-gray-600">Nov 12, 2024 - Nov 19, 2024</h3>

        {/* Share Button */}
        <button
          aria-label="Share work history"
          className="flex-shrink-0 p-2 ml-1 transition duration-300 border border-green-600 rounded-full sm:ml-3 hover:bg-green-50"
        >
          <FaShareAlt
            size={28}
            color="green"
            className="p-1 border rounded-full hover:bg-green-200"
          />
        </button>
      </div>

      {/* Comment Section */}
      <div className="w-full h-auto mt-3 text-gray-700">
        <p className="text-sm">Comment section</p>
      </div>

      {/* Price and Payment Section */}
      <div className="flex justify-between w-full mt-3 text-lg sm:w-1/2">
        <p className="font-semibold text-gray-900">$13.33</p>
        <p className="text-gray-600">Fixed price</p>
      </div>
    </div>
  );
};

export default JobReviewByClient;
