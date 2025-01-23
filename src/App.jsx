import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Form/ColorForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors); // Initializing colors array using initial colors

  function handleAddingColor(newColor) {
    setColors([{ id: nanoid(), ...newColor }, ...colors]); // Creates a new object with a unique ID, adds newColor to the beginning of the array
  }

  function handleDeleteColor(id) {
    // FILTER OUT THE ENTRY WITH THE ID
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  }

  function handleEditColor(id, updatedColor) {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, ...updatedColor } : color
    );
    setColors(updatedColors);
    console.log("Updated Colors:", updatedColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddingColor} buttonText="Add Color" />

      {colors.length === 0 ? (
        <p className="empty-state">No colors ... start by adding some!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onEditColor={(updatedColor) =>
              handleEditColor(color.id, updatedColor)
            }
          />
        ))
      )}
    </>
  );
}

export default App;
