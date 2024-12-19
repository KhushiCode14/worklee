import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
const JobReviewByClient = () => {
  return (
    <div className="flex flex-col gap-5 w-full hover:bg-gray-200  pl-2 py-3 ">
      <div>
        <h2 className="text-green-600 hover:underline text-3xl cursor-pointer">
          Title of job
        </h2>
      </div>
      <div className="flex gap-3 text-black items-center">
        <h3 className="flex gap-1">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
        </h3>
        <h3>5.00</h3>
        <h3>Nov 12, 2024 - Nov 19, 2024</h3>
        <button
          aria-label="Share work history"
          className="air3-btn air3-btn-secondary air3-btn-circle air3-btn-sm ml-1x ml-md-3x flex-shrink-0"
        >
          <h3 className="air3-icon sm">
            <FaShareAlt
              size={40}
              color="green"
              className="rounded-full border border-green-600 p-2"
            />
          </h3>
        </button>
      </div>
      <div className="h-auto ">
        {" "}
        <p>Comment section</p>
      </div>
      <div className="flex justify-between">
        <p>$13.33</p>
        <p>Fixed price</p>
      </div>
    </div>
  );
};

export default JobReviewByClient;
