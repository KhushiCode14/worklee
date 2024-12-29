// import { RxCross2 } from "react-icons/rx";
9;
// import React from "react";

const FreelancerTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="flex flex-col items-center w-full h-screen max-w-3xl">
        <div className="w-full mb-8 text-center">
          <p className="text-sm text-gray-500">4/10</p>
          <h1 className="mb-2 text-2xl font-bold">
            Got it. Now, add a title to tell the world what you do.
          </h1>
          <p className="text-gray-600">
            It’s the very first thing clients see, so make it count. Stand out
            by describing your expertise in your own words.
          </p>
        </div>
        <div className="w-full mb-8">
          <label className="block mb-2 text-gray-700">
            Your professional role
          </label>
          <div className="relative">
            <input
              type="text"
              value="Data Entry & Transcription Services | Twitter/X, X++, macOS, Algebra"
              className="w-full p-2 border rounded"
              readOnly
            />
            <i className="absolute text-gray-500 fas fa-times right-3 top-3"></i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded">
            Back
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded">
            Next, add your experience
          </button>
        </div>
      </main>
    </div>
  );
};

export default FreelancerTitle;
