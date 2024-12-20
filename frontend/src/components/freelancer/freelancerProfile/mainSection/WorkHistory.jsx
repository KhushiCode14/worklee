import { BsArrowDownUp } from "react-icons/bs";
import JobReviewByClient from "./JobReviewByClient";

const WorkHistory = () => {
  return (
    <div className="w-full h-auto mt-20">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold text-gray-800">Work History</h2>
          <BsArrowDownUp
            size={40}
            color="green"
            className="p-2 transition border border-green-600 rounded-full hover:bg-green-50"
          />
        </div>

        {/* Tabs Section */}
        <div className="flex gap-5 pb-5">
          <button className="focus:outline-none">
            <h3 className="text-2xl font-medium text-gray-800 transition hover:text-green-600">
              Completed Jobs
            </h3>
          </button>
          <button className="focus:outline-none">
            <h3 className="text-2xl font-medium text-gray-800 transition hover:text-green-600">
              In Progress Jobs
            </h3>
          </button>
        </div>
      </div>

      {/* Job Reviews Section */}
      <div className="flex flex-col gap-8">
        <JobReviewByClient />
        <div className="w-full h-px bg-gray-300"></div>
        <JobReviewByClient />
      </div>
    </div>
  );
};

export default WorkHistory;
