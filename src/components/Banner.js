import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-header-banner h-[48rem] bg-yellow-50">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-semibold text-center text-gray-700 md:text-4xl lg:text-5xl poppins">
          Best food waiting for your belly
        </h1>
      </div>
    </section>
  );
};

export default Banner;
