import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [confirmationMessage, setConfirmationMessage] = useState("Delete"); // State to handle confirmation message

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
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

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
