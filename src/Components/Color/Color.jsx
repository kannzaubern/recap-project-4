import "./Color.css";
import { useState } from "react";
import ColorForm from "../Form/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmationMessage, setConfirmationMessage] = useState("Delete"); // State to handle confirmation message
  const [editMode, setEditMode] = useState(false);

  function handleConfirmation() {
    setConfirmationMessage("Are you sure?");
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <section>
        <h3 className="color-card-headline">{color.hex}</h3>
        <button className="edit-button" onClick={() => setEditMode(true)}>
          Edit
        </button>
      </section>
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
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      )}

      {/* Delete Button */}
      <button className="delete-button" onClick={() => handleConfirmation()}>
        {confirmationMessage}
      </button>

      {/* Confirmation Button */}
      {confirmationMessage == "Are you sure?" && (
        <button onClick={() => onDeleteColor(color.id)}>Yes</button>
      )}
    </div>
  );
}
