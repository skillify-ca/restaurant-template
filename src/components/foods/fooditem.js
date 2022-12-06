import React from "react";

const FoodItem = ({ image, title, description, price, type }) => {
  return (
    <div className="relative p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:scale-105">
      <img
        className="w-64 mx-auto transition duration-300 transform hover:scale-105"
        src={image}
        alt=""
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-lg text-gray-900 poppins">{title}</h1>
        <p className="text-sm text-center text-gray-500 poppins">
          {description.slice(0, 50)}
        </p>
        <h2 className="text-2xl font-bold text-gray-900 poppins">${price}</h2>
        <button className="px-8 py-2 mt-24 text-white transition duration-300 transform rounded-full bg-primary focus:outline-none poppins hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
