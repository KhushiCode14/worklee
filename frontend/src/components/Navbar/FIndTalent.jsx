import { IoIosArrowForward } from "react-icons/io";
import First from "./subnavbar/First";
import Second from "./subnavbar/Second";
import Third from "./subnavbar/Third";
import { useState } from "react";

const FindTalent = () => {
  const [activeDropdown, setActiveDropdown] = useState("first");

  const handleDropdownClick = (key) => setActiveDropdown(key);

  return (
    <div className="absolute left-0 min-w-full w-auto h-auto  mt-5 bg-white rounded-lg shadow-lg z-[100] top-full">
      {/* Left Menu Section */}
      <ul className="flex flex-col w-1/2 border-r">
        <li
          className={`flex items-center gap-3 px-6 py-4 cursor-pointer ${
            activeDropdown === "first" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => handleDropdownClick("first")}
        >
          <div>
            <h3 className="text-lg font-semibold">Post a Job and Hire a Pro</h3>
            <p className="text-sm text-green-600">Talent Marketplace</p>
          </div>
          <IoIosArrowForward className="text-gray-500" />
        </li>
        <li
          className={`flex items-center gap-3 px-6 py-4 cursor-pointer ${
            activeDropdown === "second" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => handleDropdownClick("second")}
        >
          <div>
            <h3 className="text-lg font-semibold">Browse and Buy Products</h3>
            <p className="text-sm text-green-600">Project Catalog</p>
          </div>
          <IoIosArrowForward className="text-gray-500" />
        </li>
        <li
          className={`flex items-center gap-3 px-6 py-4 cursor-pointer ${
            activeDropdown === "third" ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          onClick={() => handleDropdownClick("third")}
        >
          <div>
            <h3 className="text-lg font-semibold">
              Get Advice from an Industry Expert
            </h3>
            <p className="text-sm text-green-600">Consultations</p>
          </div>
          <IoIosArrowForward className="text-gray-500" />
        </li>
      </ul>

      {/* Right Content Section */}
      <div className="w-1/2 p-6">
        {activeDropdown === "first" && <First />}
        {activeDropdown === "second" && <Second />}
        {activeDropdown === "third" && <Third />}
      </div>
    </div>
  );
};

export default FindTalent;
