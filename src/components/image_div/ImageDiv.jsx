import "./ImageDiv.css";

export default function ImageDiv({ title, subtitle, imageUrl }) {
  return (
    <div className="images">
      <img src={imageUrl} alt="Image" />
      <div className="image-text">
        <h2>{title}</h2>
        <div>
          <p>{subtitle}</p>
          <a href="">READ MORE</a>
        </div>
      </div>
    </div>
  );
}
