import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors); // Initializing colors array using initial colors

  function handleAddingColor(newColor) {
    setColors([...colors, { id: nanoid(), ...newColor }]); // Creates a new object with a unique ID
    // Write function here
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddingColor} />
      {colors.map((color) => {
        // Iterate over every (color) in this array and execute callback function
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
