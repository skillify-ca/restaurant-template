import React from "react";

const Skeleton = () => {
  return (
    <div className="relative p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg animate-pulse hover:shadow-xl hover:scale-105">
      <span className="inline-block px-4 py-1 mb-4 bg-gray-100 border border-gray-500 rounded-full "></span>
      <div className="w-64 h-48 mx-auto transition duration-300 transform bg-gray-200 hover:scale-105">
        {" "}
      </div>
      <div className="flex flex-col items-center my-3 space-y-2">
        <div className="py-3 bg-gray-300 w-36"></div>
        <p className="py-1 bg-gray-200 w-72"></p>
        <div className="w-24 py-2 bg-gray-200"></div>
        <button className="px-8 py-3 mt-24 text-white transition duration-300 transform bg-gray-400 rounded-full focus:outline-none poppins hover:scale-105"></button>
      </div>
    </div>
  );
};

export default Skeleton;
