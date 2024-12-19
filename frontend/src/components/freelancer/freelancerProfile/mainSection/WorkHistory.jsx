import React from "react";
import { BsArrowDownUp } from "react-icons/bs";
import JobReviewByClient from "./JobReviewByClient";

const WorkHistory = () => {
  return (
    <div className="w-full h-auto ">
      <div className="flex gap-2 flex-col">
        <div className="flex gap-3 ">
          <h2 className="text-3xl text-black pb-4">Work History</h2>
          <BsArrowDownUp
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>

        <div className="flex gap-5 pb-5">
          <button>
            {" "}
            <h3 className="text-2xl text-black">Completed jobs</h3>
          </button>
          <button>
            {" "}
            <h3 className="text-2xl text-black">progrees job</h3>
          </button>
        </div>
      </div>

      <div>
        <JobReviewByClient />
        <div className="divider w-full h-1"></div>
        <JobReviewByClient />
      </div>
    </div>
  );
};

export default WorkHistory;
