import "../custom_button/CustomButton.css";

export default function CustomButton({ title, color, textColor }) {
  return (
    <button className="custom-button" style={{ backgroundColor: color }}>
      <p style={{ color: textColor }}>{title} &#10230;</p>
    </button>
  );
}
