import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import Nav from "../ui/Nav";
import FindWork from "./freelancerNavbar/FindWork";
import { useState } from "react";

const FreelancerNav = () => {
  const label = {
    work: "Find Work",
    deliver: "Deliver Work",
    manage: "Manage Finance",
    message: "Messages",
  };

  const [dropdown, setDropdown] = useState({});
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active menu/search

  const handleDropdownClick = (key) => {
    setDropdown((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific dropdown
    }));
  };

  return (
    <div className="w-full px-4 py-2 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Nav />

        {/* Mobile: Hamburger Menu and Search */}
        <div className="flex items-center gap-4 sm:hidden">
          <FaSearch
            size={25}
            className="cursor-pointer"
            onClick={() =>
              setActiveSection(activeSection === "search" ? "" : "search")
            }
          />
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={() =>
              setActiveSection(activeSection === "menu" ? "" : "menu")
            }
          />
        </div>

        {/* Desktop: Full Navigation */}
        <ul className="hidden gap-6 text-black sm:flex sm:flex-wrap">
          {Object.keys(label).map((key) => (
            <li
              className="cursor-pointer"
              onMouseOver={() =>
                setDropdown((prev) => ({ ...prev, [key]: true }))
              }
              onMouseOut={() =>
                setDropdown((prev) => ({ ...prev, [key]: false }))
              }
              key={key}
            >
              <button
                onClick={() => handleDropdownClick(key)}
                className="text-base sm:text-lg"
              >
                {label[key]}
              </button>
              {dropdown[key] && key === "work" && <FindWork />}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="items-center hidden gap-4 sm:flex">
          <MdQuestionMark size={20} color="black" />
          <FaBell size={20} color="black" />
          <img src="" alt="Avatar" className="w-8 h-8 rounded-full avatar" />
        </div>
      </div>

      {/* Mobile: Render Active Sections */}
      {activeSection === "menu" && (
        <div className="flex flex-col mt-4">
          {Object.keys(label).map((key) => (
            <button
              key={key}
              className="px-4 py-2 text-left border-b border-gray-200"
              onClick={() => handleDropdownClick(key)}
            >
              {label[key]}
            </button>
          ))}
        </div>
      )}

      {activeSection === "search" && (
        <div className="flex items-center justify-center mt-4">
          <label
            htmlFor="search"
            className="flex items-center w-full p-2 text-gray-800 border border-gray-700 rounded-3xl"
          >
            <FaSearch className="pr-2" size={25} />
            <input
              type="search"
              className="w-full bg-transparent outline-none"
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
      )}
    </div>
  );
};

export default FreelancerNav;
