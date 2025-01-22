import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); // Only grabbing data/info of the form
    onAddColor(data);
    console.log("Data:", data); // Pass data to parent component
    e.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <br />
      <input type="text" id="role" name="role" placeholder="some role" />
      <br />

      <label htmlFor="hex">HEX</label>
      <br />
      <ColorInput name="hex" initialValue="#ffffff" />
      <br />

      <label htmlFor="contrastText">Contrast Text</label>
      <br />
      <ColorInput name="contrastText" initialValue="#ffffff" />
      <br />

      <button type="submit" className="form__button">
        Add Color
      </button>
    </form>
  );
}
