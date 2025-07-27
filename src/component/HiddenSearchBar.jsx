import React, { useState } from "react";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e)=> {
    setBgColor('#181818ff');

    if (e.target.className === 'container') {
      setShowInput(false);
      setBgColor('#fff')
    }
  }

  return (
    <section className="container" style={{ backgroundColor: bgColor, width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s'}} onClick={handleClick}>
      {showInput ? (
        <input type="text" name="" id="" placeholder="Search something" />
      ) : (
        <button onClick={() => setShowInput(true)}>Search</button>
      )}
    </section>
  );
};

export default HiddenSearchBar;
