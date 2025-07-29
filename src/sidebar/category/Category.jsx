import React, { useState } from "react";

const Category = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleChange = (e) => {
    setSelectedOption(e.target.id);
  };

  const options = [
    { id: "all", label: "All" },
    { id: "sneakers", label: "Sneakers" },
    { id: "flat", label: "Flat" },
    { id: "sandals", label: "Sandals" },
    { id: "heels", label: "Heels" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Category</h1>
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className="flex justify-start items-center gap-4"
        >
          <input
            type="radio"
            name="shoeType" // Same name for all radio buttons
            id={option.id}
            checked={selectedOption === option.id}
            onChange={handleChange}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Category;
