import "./Color.css";
import { useState } from "react";
import ColorForm from "../Form/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmationMessage, setConfirmationMessage] = useState(false); // State to handle confirmation message
  const [editMode, setEditMode] = useState(false);
  const [buttonText, setButtonText] = useState("COPY");

  async function handleCopyColor() {
    const hexColor = color.hex;
    await navigator.clipboard.writeText(hexColor); // writeText method of clipboard API returns a promise; function pauses execution until promise resolves
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
      {editMode ? (
        <>
          {/* Render the edit form */}
          <ColorForm
            onSubmitColor={(updatedColor) => {
              onEditColor(updatedColor); // Only pass the updatedColor, not the id
              setEditMode(false);
            }}
            buttonText="CHANGE COLOR"
          />
          <button onClick={() => setEditMode(false)}>CANCEL</button>{" "}
        </>
      ) : (
        <>
          {/* Delete + Confirmation Mode */}
          {confirmationMessage ? (
            <>
              <div className="color-card-headline">Are you sure?</div>
              <button onClick={() => setConfirmationMessage(false)}>
                CANCEL
              </button>

              <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
              {/* Triggers parent component's delete function. */}
            </>
          ) : (
            // If confirmationMessage is false (user hasn't tapped DELETE), render different DELETE button.
            <button onClick={() => setConfirmationMessage(true)}>DELETE</button>
          )}
          <button className="edit-button" onClick={() => setEditMode(true)}>
            EDIT
          </button>
        </>
      )}
    </div>
  );
}
