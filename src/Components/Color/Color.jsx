import "./Color.css";
import { useState } from "react";
import ColorForm from "../Form/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmationMessage, setConfirmationMessage] = useState(false); // State to handle confirmation message
  const [editMode, setEditMode] = useState(false);

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

      {/* Delete + Confirmation Button */}
      {confirmationMessage ? (
        <>
          <div className="color-card-headline">Are you sure?</div>
          <button onClick={() => setConfirmationMessage(false)}>CANCEL</button>

          {/* When cancel is clicked, onClicking event will trigger the arrow function 
          and change state to false */}
          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
        </>
      ) : (
        <button onClick={() => setConfirmationMessage(true)}>DELETE</button>
        /* Delete button triggers onclick function, 
        executes the arrow function, updates/ changes state to true and 
        jumps to the above condition to be executed.  */
      )}
    </div>
  );
}
