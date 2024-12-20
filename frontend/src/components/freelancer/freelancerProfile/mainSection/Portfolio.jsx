import { BsArrowDownUp } from "react-icons/bs";
import { useState } from "react";
import PortfolioSlide from "./PortfolioSlide";
import PortfolioDraft from "./PortfolioDraft";
import { FaPlus } from "react-icons/fa6";

const Portfolio = () => {
  const [slide, setSlide] = useState(false);

  return (
    <div className="w-full h-auto p-6 rounded-lg shadow-sm bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-3xl font-bold text-gray-800">Portfolio</p>
        <div className="flex gap-3">
          <FaPlus
            size={40}
            className="p-2 border border-green-600 rounded-full cursor-pointer hover:bg-green-100"
          />
          <BsArrowDownUp
            size={40}
            className="p-2 border border-green-600 rounded-full cursor-pointer hover:bg-green-100"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-5 p-4 text-lg font-medium text-gray-600 border-b border-gray-200">
        <button
          onClick={() => setSlide(false)}
          className={`${
            !slide ? "underline text-black font-bold" : ""
          } transition-colors duration-300 hover:text-black`}
        >
          Published
        </button>
        <button
          onClick={() => setSlide(true)}
          className={`${
            slide ? "underline text-black font-bold" : ""
          } transition-colors duration-300 hover:text-black`}
        >
          Drafts
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {slide ? <PortfolioDraft /> : <PortfolioSlide />}
      </div>
    </div>
  );
};

export default Portfolio;
