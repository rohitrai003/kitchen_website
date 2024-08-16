import "../About_Us/AboutUs.css";
import CustomButton from "../../../../components/custom_button/CustomButton";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="experience">
        <div className="experience-sub-box">
          <h1>25</h1>
          <div>
            <p>
              Year <br />
              experience
              <br />
              working
            </p>
          </div>
        </div>
      </div>
      <div className="about-us-text1">
        <p>ABOUT US</p>
        <h1>Creative solutions by professional designers</h1>
      </div>
      <div className="about-us-text2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eligendi voluptatum quo dolorum eum, earum ipsa quasi vero magnam
          omnis culpa sapiente expedita corrupti ad quas maxime. Tempora, est
          error!
        </p>
        <CustomButton title={"CONTINUE READING"} color={"#1C1F26"} />
      </div>
    </div>
  );
}
