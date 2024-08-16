import Line from "../../../../components/Line/Line";
import CustomButton from "../../../../components/custom_button/CustomButton";
import ItemCollectionDiv from "../../../../components/item_collection_div/ItemCollectionDiv";
import "./ProductInfo.css";

export default function ProductInfo() {
  return (
    <div className="productinfo">
      <div className="method">
        <div className="method-text">
          <h2>METHOD</h2>
          <h1>A modern approach to design</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            tenetur dolores alias delectus repellendus. Ut incidunt magni, rem
            aperiam, repellendus officiis, sit ratione harum excepturi possimus
            cupiditate maiores quis nulla.
          </p>
          <CustomButton
            color={"#fff"}
            textColor={"#000"}
            title={"VIEW OUR GALLERY"}
          />
        </div>
        <img
          className="method-image"
          src="https://st.hzcdn.com/simgs/46b164b5050ad77c_14-9349/home-design.jpg"
        ></img>
      </div>
      <div className="collection">
        <ItemCollectionDiv title={"Interior Design"} number={"25+"} />
        <ItemCollectionDiv title={"Architecture"} number={"93+"} />
        <ItemCollectionDiv title={"Construction"} number={"48+"} />
        <ItemCollectionDiv title={"Projects Done"} number={"68+"} />
      </div>
      <Line />
    </div>
  );
}
