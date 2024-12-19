// import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick

const Carousel = () => {
  // Slick settings for infinite scroll
  const settings = {
    infinite: true, // Enable infinite scroll
    speed: 500, // Speed of transition
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between auto transitions
    arrows: true, // Enable arrows for manual navigation
  };

  return (
    <div>
      {/* React Slick Carousel */}
      <Slider {...settings}>
        {/* Carousel Items */}
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
            alt="Carousel Item 1"
          />
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
            alt="Carousel Item 2"
          />
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
            alt="Carousel Item 3"
          />
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
            alt="Carousel Item 4"
          />
        </div>
      </Slider>

      {/* Navigation Buttons */}
      <div className="flex justify-center w-full gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
