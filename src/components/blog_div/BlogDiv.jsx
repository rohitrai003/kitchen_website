import "./BlogDiv.css";

export default function BlogDiv({ image, title, date }) {
  return (
    <div className="blogdiv">
      <img src={image} alt="Image" />
      <h1 className="title">{title}</h1>
      <div className="date">
        {date} - by<span>Admin</span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quo.
        Nostrum eligendi aspernatur iste quasi beatae eos maiores, sit eum
        molestias fugit, ex explicabo reiciendis facilis quo at ipsam illum.
      </p>
      <a href="">READ MORE</a>
    </div>
  );
}
