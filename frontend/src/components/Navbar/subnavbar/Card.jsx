// import React from "react";
import PropTypes from "prop-types";
const data = [
  {
    id: 1,
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Shoes",
    title: "Shoes!",
  },
  {
    id: 2,
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Learning",
    title: "Learning",
  },
  {
    id: 3,
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Shoes",
    title: "Shoes!",
  },
  {
    id: 4,
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Learning",
    title: "Learning",
  },
];

const Cards = () => {
  console.log("Cards component is being rendered");
  console.log("Data:", data);
  return (
    <div className="grid grid-cols-2 gap-3 p-5 text-nowrap">
      {data.map((item) => (
        <div
          key={item.id}
          className="items-center justify-center w-full bg-white shadow-xl card card-compact rounded-xl text-nowrap"
        >
          <figure>
            <img
              src={item.src}
              alt={item.alt}
              className="text-nowrap"
              onLoad={() => console.log(`Image loaded: ${item.src}`)}
              onError={() => console.log(`Error loading image: ${item.src}`)}
            />
          </figure>
          <div className="h-8 text-black bg-white ">
            <h2 className="text-center">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default Cards;
