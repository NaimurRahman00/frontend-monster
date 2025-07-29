import React, { useState } from "react";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState("all");

  const handleChange = (e) => {
    setSelectedColor(e.target.id);
  };

  const colors = [
    { id: "all", label: "All", colorClass: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" },
    { id: "black", label: "Black", colorClass: "bg-black" },
    { id: "blue", label: "Blue", colorClass: "bg-blue-600" },
    { id: "red", label: "Red", colorClass: "bg-red-600" },
    { id: "green", label: "Green", colorClass: "bg-green-600" },
    {
      id: "white",
      label: "White",
      colorClass: "bg-white border border-gray-300",
    },
  ];
  
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Price</h1>
      {colors.map((color) => (
        <label
          key={color.id}
          htmlFor={color.id}
          className="flex justify-start items-center gap-4 my-2"
        >
          <input
            type="radio"
            name="colorFilter" 
            id={color.id}
            checked={selectedColor === color.id}
            onChange={handleChange}
            className="hidden" 
          />

          <div className={`flex items-center gap-2`}>
            <div
              className={`w-5 h-5 rounded-full ${color.colorClass} ${
                selectedColor === color.id
                  ? "ring-2 ring-offset-2 ring-purple-600"
                  : ""
              }`}
            />
            <span>{color.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Colors;
