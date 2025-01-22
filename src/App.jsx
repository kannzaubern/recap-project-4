import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/Form/ColorForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors); // Initializing colors array using initial colors

  function handleAddingColor(newColor) {
    setColors([...colors, { id: nanoid(), ...newColor }]); // Creates a new object with a unique ID
  }

  function handleDeleteColor(id) {
    // FILTER OUT THE ENTRY WITH THE ID
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddingColor} />

      {colors.length === 0 ? (
        <p className="empty-state">No colors ... start by adding some!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        ))
      )}
    </>
  );
}

export default App;
