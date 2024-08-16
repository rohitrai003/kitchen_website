import CustomButton from "../../components/custom_button/CustomButton";
import Navbar from "../Navbar/Navbar";
import "../Header/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="background-image"></div>
      <Navbar />
      <div className="header-items">
        <div className="bg-img"></div>
        <h1>
          Design Your Kitchen <br /> with the Experts
        </h1>
        <p>$150 deposit</p>
        <p>3D Design & Management</p>
        <div className="header-button">VISIT SHOW ROOM</div>
        <div className="dots">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
