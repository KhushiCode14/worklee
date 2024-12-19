import { FaBell } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import Nav from "../ui/Nav";
import FindWork from "./freelancerNavbar/FindWork";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FreelancerNav = () => {
  const label = {
    work: "Find Work",
    deliver: "Deliver Work",
    manage: "Manage Finance",
    message: "Messages",
  };
  const [dropdown, setDropdonwn] = useState({});
  const handleDropdownClick = (key) => {
    setDropdonwn((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific dropdown
    }));
  };
  const handleMouseOver = (key) => {
    setDropdonwn((prev) => ({
      ...prev,
      [key]: true,
    }));
  };
  const handleOut = (key) => {
    setDropdonwn((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-between w-full px-4 py-2 sm:flex-row sm:px-8 lg:px-16">
      <div className="flex flex-col items-center w-full sm:flex-row sm:gap-6">
        <Nav />
        <ul className="flex flex-wrap gap-3 mt-3 text-black sm:gap-6 sm:mt-0">
          {Object.keys(label).map((key) => (
            <li
              className="cursor-pointer"
              onMouseOver={() => handleMouseOver(key)}
              onMouseOut={() => handleOut(key)}
              key={key}
            >
              <button
                onClick={() => handleDropdownClick(key)}
                className="text-base sm:text-lg"
              >
                {label[key]}
              </button>
              <li>{dropdown[key] && key === "work" && <FindWork />}</li>
              <li>{dropdown[key] && key === "deliver" && <FindWork />}</li>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row sm:gap-6 sm:mt-0">
        {/* Search bar */}
        <div className="flex items-center justify-center">
          <label
            htmlFor="search"
            className="flex items-center w-full p-2 text-gray-800 border border-gray-700 rounded-3xl sm:w-auto"
          >
            <FaSearch className="pr-2" size={25} />
            <input
              type="search"
              className="w-full bg-transparent outline-none sm:w-36"
              id="search"
              placeholder="Search"
            />
            <select className="p-1 ml-2 text-black bg-transparent border-none rounded-2xl">
              <option value="Job">Job</option>
              <option value="Talent">Talent</option>
              <option value="Projects">Projects</option>
            </select>
          </label>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <MdQuestionMark size={20} color="black" />
          <FaBell size={20} color="black" />
          <img src="" alt="Avatar" className="w-8 h-8 rounded-full avatar" />
        </div>
      </div>
    </div>
  );
};

export default FreelancerNav;
