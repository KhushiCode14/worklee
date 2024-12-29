import { RxCross2 } from "react-icons/rx";
9;
// import React from "react";

const FreelancerTitle = () => {
  return (
    <section className="w-full md:w-1/2 ">
      <div className="">
        <h1 className="mb-8 text-3xl text-white dark:text-black ">
          Got it. Now, add a title to tell the world what you do
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <label
          htmlFor="professional-role"
          className="block mb-2 text-base text-gray-800 dark:text-gray-300"
        >
          Your professional role
        </label>
        <div className="relative w-full bg-transparent">
          <input
            id="professional-role"
            type="text"
            placeholder="Enter your title"
            className="w-full py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <RxCross2
            className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:text-red-600"
            aria-label="Clear input"
            title="Clear input"
          />
        </div>
      </div>
    </section>
  );
};

export default FreelancerTitle;
