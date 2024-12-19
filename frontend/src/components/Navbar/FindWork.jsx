import { useState } from "react";

const FindWork = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (key) => {
    setActiveDropdown(key);
  };
  const handleMouseOver = (key) => {
    setActiveDropdown(key);
  };

  const handleMouseOut = () => {
    setActiveDropdown(null);
  };
  return (
    <div className="absolute left-0 z-50 flex gap-5 mt-5 bg-white shadow-md top-full">
      <div className="flex w-1/2 py-4 overflow-visible bg-white rounded-lg">
        <div
          className={`flex flex-col items-center justify-around px-4 py-2 overflow-hidden cursor-pointer hover:bg-gray-100 min-w-fit whitespace-nowrap ${
            activeDropdown === "first" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleDropdownClick("first")}
          onMouseOver={() => handleMouseOver("first")}
          onMouseOut={handleMouseOut}
        >
          <div className="flex flex-col p-2 m-5 ">
            <h3 className="font-semibold text-md">Ways to earn</h3>
            <p className="text-gray-500 ">
              Learn why Upwork has the right opportunities for you.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-around px-4 py-2 overflow-hidden cursor-pointer hover:bg-gray-100 min-w-fit whitespace-nowrap ${
            activeDropdown === "second" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleDropdownClick("second")}
          onMouseOver={() => handleMouseOver("second")}
          onMouseOut={handleMouseOut}
        >
          <div className="flex flex-col p-2 m-5 ">
            <h3 className="font-semibold text-md">Find work for your skills</h3>
            <p className="text-gray-600 ">
              Explore the kind of work available in your field.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-around px-4 py-2 overflow-hidden cursor-pointer hover:bg-gray-100 min-w-fit whitespace-nowrap ${
            activeDropdown === "third" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleDropdownClick("third")}
          onMouseOver={() => handleMouseOver("third")}
          onMouseOut={handleMouseOut}
        >
          <div className="flex flex-col p-2 m-5 ">
            <h3 className="font-semibold text-md">Win work with ads</h3>
            <p className="text-gray-600 ">Get noticed by the right client.</p>
          </div>
        </div>
      </div>
      <div className="w-px mx-5 "></div>
    </div>
  );
};

export default FindWork;
