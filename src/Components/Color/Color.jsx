import "./Color.css";
import { useState } from "react";
import ColorForm from "../Form/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmationMessage, setConfirmationMessage] = useState(false); // State to handle confirmation message
  const [editMode, setEditMode] = useState(false);
  const [buttonText, setButtonText] = useState("COPY");

  async function handleCopyColor() {
    const hexColor = color.hex;
    await navigator.clipboard.writeText(hexColor);
    console.log("Console color:", color.hex);
    setButtonText("COPIED SUCCESSFULLY");
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <button className="button-copy" onClick={() => handleCopyColor(color.id)}>
        {buttonText}
      </button>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* Edit Mode */}
      {editMode && (
        <>
          <ColorForm
            onSubmitColor={(updatedColor) => {
              onEditColor(updatedColor); // Only pass the updatedColor, not the id
              setEditMode(false); // Close edit mode after submitting
            }}
            buttonText="Change Color"
          />
          <button onClick={() => setEditMode(false)}>CANCEL</button>
        </>
      )}

      {/* Delete + Confirmation Button */}
      {confirmationMessage ? (
        // If confirmationMessage is true (i.e. user has clicked delete and confirmation is needed)
        <>
          <div className="color-card-headline">Are you sure?</div>
          <button onClick={() => setConfirmationMessage(false)}>CANCEL</button>
          {/* When cancel is clicked, onClicking event will trigger the arrow function 
          and change state to false */}

          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
          {/* When button is clicked, function is called and id of current color is passed. 
          This triggers parent component's delete function. */}
        </>
      ) : (
        // If confirmationMessage is false (user hasn't tapped DELETE yet), render DELETE button.
        <button onClick={() => setConfirmationMessage(true)}>DELETE</button>
      )}
      <button className="edit-button" onClick={() => setEditMode(true)}>
        EDIT
      </button>
    </div>
  );
}
