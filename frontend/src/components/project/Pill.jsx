import React from "react";

const Pill = ({ image, text, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 hover:text-blue-800"
    >
      <img src={image} alt={text} className="w-6 h-6 mr-2 rounded-full" />
      {text}
    </span>
  );
};

export default Pill;
