import CustomDiv from "../../../../components/custom_div/CustomDiv.jsx";
import "./WhyChooseUs.css";
import Bulb from "../../../../assets/icons/bulb.png";
import Dollar from "../../../../assets/icons/dollar.png";
import HandShake from "../../../../assets/icons/handshake.png";
import User from "../../../../assets/icons/user.png";

export default function WhyChooseUs() {
  const details = [
    {
      title: "Full Service",
      icon: Bulb,
    },
    {
      title: "Deliver Value",
      icon: Dollar,
    },
    {
      title: "Partners",
      icon: HandShake,
    },
    {
      title: "Integrity",
      icon: User,
    },
  ];
  return (
    <div className="whychooseus">
      <h3>WHY CHOOSE US</h3>
      <h1>Extremely high standard of custumer satisfaction</h1>

      <div className="items">
        {details.map((e, index) => (
          <CustomDiv title={e.title} icon={e.icon} key={index} />
        ))}
      </div>
    </div>
  );
}
