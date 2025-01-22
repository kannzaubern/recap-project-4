import { useState } from "react";

export default function ColorInput({ name, initialValue }) {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
    // console.log("ColorInput Event:", event.target);
  }

  return (
    <>
      <input
        type="text"
        id={name}
        name={name}
        value={inputValue}
        onChange={handleInputValue} // Notifying the parent when value changes
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
