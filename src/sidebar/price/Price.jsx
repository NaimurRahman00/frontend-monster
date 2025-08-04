const Price = ({handleChange, selectedCategory}) => {
  // const [selectedPrice, setSelectedPrice] = useState("all");

  // const handleChange = (e) => {
  //   setSelectedPrice(e.target.id);
  // };

  const priceRanges = [
    { id: "all", label: "All" },
    { id: "0-50", label: "$0 - $50" },
    { id: "51-100", label: "$51 - $100" },
    { id: "101-150", label: "$101 - $150" },
    { id: "over150", label: "Over $150" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Price</h1>
      {priceRanges.map((range) => (
        <label
          key={range.id}
          htmlFor={range.id}
          className="flex justify-start items-center gap-4"
        >
          <input
            type="radio"
            name="priceRange" 
            id={range.id}
            checked={selectedCategory === range.id}
            onChange={handleChange}
          />
          <span>{range.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Price;
