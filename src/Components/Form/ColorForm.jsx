import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitColor,
  buttonText,
  colorValues = {
    role: "secondary light",
    hex: "#9FA8DA",
    contrastText: "#000000",
  },
}) {
  function handleSubmit(e) {
    e.preventDefault(); // Prevents page from reloading when form is submitted
    const formData = new FormData(e.target); // Grabs data from form fields
    const data = Object.fromEntries(formData); // Converts ony necessary form data into a plain object
    onSubmitColor(data);
    console.log("Data:", data); // Pass data to parent component
    e.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <br />
      <input type="text" id="role" name="role" placeholder={colorValues.role} />
      <br />

      <label htmlFor="hex">HEX</label>
      <br />
      <ColorInput name="hex" initialValue={colorValues.hex} />
      <br />

      <label htmlFor="contrastText">Contrast Text</label>
      <br />
      <ColorInput name="contrastText" initialValue={colorValues.contrastText} />
      <br />

      <button type="submit" className="form__button">
        {buttonText}
      </button>
    </form>
  );
}

// We need 'name' properties to ensure that value is included in form submission
