import React, { useRef } from "react";
import { GoPencil } from "react-icons/go";
import Slider from "react-slick";
const PortfolioDraft = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="relative w-full h-auto  ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1} className="flex justify-center items-center">
            <img
              src="/home.webp"
              alt="Portfolio 5"
              className="w-full h-auto max-w-full rounded-lg"
            />
          </div>
          <div key={2} className="flex justify-center items-center">
            <img
              src="/react-examples.jpeg"
              alt="Portfolio 5"
              className="w-full h-auto max-w-full rounded-lg"
            />
          </div>
          <div key={1} className="flex justify-center items-center">
            <img
              src="/home.webp"
              alt="Portfolio 5"
              className="w-full h-auto max-w-full rounded-lg"
            />
          </div>
          <div key={2} className="flex justify-center items-center">
            <img
              src="/react-examples.jpeg"
              alt="Portfolio 5"
              className="w-full h-auto max-w-full rounded-lg"
            />
          </div>
        </Slider>
        <div className="absolute top-auto left-0 right-0 flex justify-center items-center space-x-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDraft;
