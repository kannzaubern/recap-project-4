import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex, // setting background color of card
        color: color.contrastText, // setting text color for card
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}
