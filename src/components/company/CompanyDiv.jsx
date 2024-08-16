import "./CompanyDiv.css";

export default function CompanyDiv({ title, subtitle }) {
  return (
    <div className="companydiv">
      <div className="icon">{title[0]}</div>
      <div className="companydiv-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
