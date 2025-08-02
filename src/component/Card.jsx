import React from "react";

const Card = () => {
  return (
    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px]">
      <img
        width={400}
        height={400}
        className="h-[275px] w-[350px] rounded-lg object-cover"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="card navigate ui"
      />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold">Product Name</h1>
        <p className="text-sm text-gray-500">
          This is a brief description of the product. It highlights the key
          features and benefits.
        </p>
        <div className="text-lg font-semibold">$99.99</div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">
          Add to Cart
        </button>
        <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
