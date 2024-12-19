import { useEffect, useRef, useState } from "react";
import FindTalent from "../components/Navbar/FindTalent";
import FindWork from "../components/Navbar/FindWork";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    talent: false,
    work: false,
    why: false,
    enterprise: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleMouseOver = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleMouseOut = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setDropdowns({
        talent: false,
        work: false,
        why: false,
        enterprise: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const labels = {
    talent: "Find Talent",
    work: "Find Work",
    why: "Why Upwork",
    enterprise: "Enterprise Solutions",
  };

  return (
    <nav
      ref={navbarRef}
      className="relative flex items-center justify-between text-sm bg-white border-b shadow-sm max-lg:p-3"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        {!menuOpen && (
          <AiOutlineMenu
            color="black"
            size={25}
            className="cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
        )}
        <div className="pl-4 text-xl font-bold text-black">Upwork</div>
      </div>

      {/* Navigation Links */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 p-5 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:flex lg:items-center lg:gap-8`}
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <div className="text-xl font-bold ">Upwork</div>
          <AiOutlineClose
            color="black"
            size={25}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-2 lg:flex-row lg:gap-6">
          {Object.keys(labels).map((key) => (
            <li className="relative" key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                onMouseOver={() => handleMouseOver(key)}
                onMouseOut={() => handleMouseOut(key)}
                className="flex items-center font-medium text-gray-700 hover:text-green-600"
                aria-haspopup="true"
                aria-expanded={dropdowns[key]}
              >
                <span className="mr-2">{labels[key]}</span>
                {dropdowns[key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdowns[key] && key === "talent" && (
                <div className="absolute left-0 h-auto bg-white rounded-lg shadow-lg top-full">
                  <FindTalent />
                </div>
              )}
              {dropdowns[key] && key === "work" && (
                <div className="absolute left-0 bg-white rounded-lg shadow-lg top-full">
                  <FindWork />
                </div>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 text-nowrap">
        <Link
          to="/auth/login"
          className="px-4 py-2 text-sm text-black bg-transparent border rounded-md lg:visible text-nowrap max-lg:hidden"
        >
          Log in
        </Link>
        <Button
          links="/auth/signup"
          variant="default"
          className="text-nowrap w-fit"
        >
          Sign Up
        </Button>
        <label htmlFor="" className="search md:hidden">
          <FaSearch className="text-gray-600 " size={25} />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
