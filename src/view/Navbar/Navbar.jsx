import "../Navbar/Navbar.css";
import Facebook from "../../assets/icons/facebook.png";
import Youtube from "../../assets/icons/youtube.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import Line from "../../components/Line/Line";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navOne">
        <div className="social-icons">
          <img src={Facebook} alt="image" />
          <img src={Instagram} alt="image" />
          <img src={LinkedIn} alt="image" />
          <img src={Youtube} alt="image" />
        </div>
        <div className="info">
          <div className="navOne-contact">
            <a href="">kitchenwebiste@gmail.com</a>
            <a href="">+91 9843454434</a>
          </div>
          <div className="book-appointment">Book_Appointment</div>
        </div>
      </div>
      <Line />
      <div className="navTwo">
        <div className="logo">Kitchor</div>
        <div className="navTwo-items">
          <div className="nav-items">
            <a href="">HOME</a>
            <a href="">KITCHENS</a>
            <a href="">PROJECTS</a>
            <a href="">PAGES</a>
            <a href="">SHOP</a>
            <a href="">BLOG</a>
            <a href="">CONTACT</a>
          </div>
          <div className="nav-items-icons">
            <i class="fa fa-search" />
            <i class="fa fa-user" />
            <i class="fa fa-shopping-bag" />
          </div>
        </div>
      </div>
    </div>
  );
}
