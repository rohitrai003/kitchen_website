import "./ItemCollectionDiv.css";

export default function ItemCollectionDiv({ number, title }) {
  return (
    <div className="itemcollectiondiv">
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  );
}
