import { useRef } from "react";
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-auto p-6 rounded-lg shadow-sm bg-gray-50">
      {/* Slider */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="pb-8"
      >
        <div key={1} className="flex items-center justify-center p-2">
          <img
            src="/home.webp"
            alt="Portfolio Draft 1"
            className="w-full h-auto max-w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div key={2} className="flex items-center justify-center p-2">
          <img
            src="/react-examples.jpeg"
            alt="Portfolio Draft 2"
            className="w-full h-auto max-w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div key={3} className="flex items-center justify-center p-2">
          <img
            src="/home.webp"
            alt="Portfolio Draft 3"
            className="w-full h-auto max-w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div key={4} className="flex items-center justify-center p-2">
          <img
            src="/react-examples.jpeg"
            alt="Portfolio Draft 4"
            className="w-full h-auto max-w-full border border-gray-300 rounded-lg"
          />
        </div>
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute left-0 right-0 flex items-center justify-center gap-4 bottom-4">
        <button
          className="px-4 py-2 text-white transition bg-green-600 rounded-lg shadow-md hover:bg-green-700"
          onClick={previous}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 text-white transition bg-green-600 rounded-lg shadow-md hover:bg-green-700"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PortfolioDraft;
