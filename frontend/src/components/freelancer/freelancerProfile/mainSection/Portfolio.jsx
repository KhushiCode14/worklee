import { BsArrowDownUp } from "react-icons/bs";
import React, { useState } from "react";
import PortfolioSlide from "./PortfolioSlide";
import { GoPencil } from "react-icons/go";
import PortfolioDraft from "./PortfolioDraft";

const Portfolio = () => {
  const [slide, setSlide] = useState(false);
  return (
    <div className="w-full h-auto ">
      <div className="flex justify-between p-3">
        <p className="text-3xl text-black">Portfolio</p>
        <div className="flex gap-3">
          <GoPencil
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <BsArrowDownUp
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-5 text-xl p-4 text-black">
          <button
            onClick={() => setSlide(!slide)}
            className={`${
              !slide ? "underline text-black" : "text-gray-600"
            } transition-colors duration-300`}
          >
            <p>Published</p>
          </button>
          <button
            onClick={() => setSlide(true)} // Show Published when clicked
            className={`${
              slide ? "underline text-black" : "text-gray-600"
            } transition-colors duration-300`}
          >
            <p>Drafts</p>
          </button>
        </div>
        <div>
          {slide ? (
            <PortfolioDraft /> // Show PortfolioSlide when Drafts are selected
          ) : (
            <PortfolioSlide />
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
