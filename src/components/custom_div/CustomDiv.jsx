import "./CustomDiv.css";

export default function CustomDiv({ title, icon }) {
  return (
    <div className="customdiv">
      <div className="logo">
        <img src={icon} alt="image" />
      </div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, est
        excepturi dolorum maxime vitae nulla amet deleniti accusantium.
      </p>
    </div>
  );
}
