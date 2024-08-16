import Schedule from "./Sections/Schedule/Schedule";
import "./Footer.css";
import EndFooter from "./Sections/End_Footer/EndFooter";
import Line from "../../components/Line/Line";
import Copyright from "./Copyright/Copyright";

export default function Footer() {
  return (
    <div className="footer">
      <div className="bg">
        <img
          src="https://www.hacker-kitchen.co.il/fileadmin/images/kitchen-styles/systemat/av7030/av_7030_black_star_m2_quer.jpg"
          alt=""
        />
        <div className="background"></div>
      </div>

      <div className="footer-items">
        <Schedule />
        <Line />
        <EndFooter />
      </div>
      <Copyright />
    </div>
  );
}
