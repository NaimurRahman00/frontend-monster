import React from "react";

const Card = ({ img, title, reviews, newPrice, prevPrice }) => {
  console.log(img);
  return (
    <div className="max-w-[350px] min-h-[500px] flex flex-col justify-between space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] m-auto">
      <img
        width={400}
        height={400}
        className="w-[70%] mx-auto rounded-lg object-center"
        src={img}
        alt={title}
      />
      <div>
        <div className="grid gap-2 mb-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-500">{reviews}</p>
          <div className="text-lg font-semibold">${prevPrice}</div>
          <div className="text-lg font-semibold">${newPrice}</div>
          {/* <div className="text-lg font-semibold">${star}</div> */}
        </div>
        <div className="flex items-center justify-between gap-4">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">
            Add to Cart
          </button>
          <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
