import CustomButton from "../../../../components/custom_button/CustomButton";
import "./PromoVideo.css";

export default function PromoVideo() {
  return (
    <div className="promovideo">
      <div className="bg-image"></div>

      <div className="promo-video-text">
        <h3>PROMO VIDEO</h3>
        <h1>Ensuring a safe experience from design to installation</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          temporibus rerum error molestias earum! Reiciendis, incidunt odit.
          Ratione architecto atque rerum natus tempora, dolores exercitationem
          laborum numquam esse at ex!
        </p>
        <CustomButton title={"MORE VIDEOS"} color={"#fff"} textColor={"#000"} />
      </div>
      <div className="video">
        <img
          src="https://img.freepik.com/free-photo/3d-rendering-white-minimal-kitchen-with-wood-decoration_105762-2208.jpg"
          alt="Image"
        />
      </div>
    </div>
  );
}
