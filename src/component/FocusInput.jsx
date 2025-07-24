import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Click the button to focus!"
        ref={inputRef}
      />
      <button onClick={handleFocusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
