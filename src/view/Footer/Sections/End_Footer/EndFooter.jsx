import "./EndFooter.css";
import Facebook from "../../../../assets/icons/facebook.png";
import Instagram from "../../../../assets/icons/instagram.png";
import LinkedIn from "../../../../assets/icons/linkedin.png";
import Youtube from "../../../../assets/icons/youtube.png";

export default function EndFooter() {
  return (
    <div className="endfooter">
      <div className="footer-contact">
        <div className="logo">KITCHOR</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          atque odit?
        </p>
        <div className="contact-no">+1875 33 489</div>
        <div className="footer-social-icons">
          <img src={Facebook} alt="" />
        </div>
      </div>
      <div className="footer-options">
        <div className="footer-options-items">
          <h1>ABOUT US</h1>
          <div className="items">
            <p>About Us</p>
            <p>Our Team</p>
            <p>Testimonial</p>
            <p>Right page</p>
          </div>
        </div>
        <div className="footer-options-items">
          <h1>EXPLORE</h1>
          <div className="items">
            <p>Kithen Cabinet</p>
            <p>Counter tags</p>
            <p>Bathroom varieties</p>
            <p>Variety Tags</p>
          </div>
        </div>
        <div className="footer-options-items">
          <h1>QUICK LINKS</h1>
          <div className="items">
            <p>FAQ</p>
            <p>Blog</p>
            <p>Design </p>
            <p>Warranty</p>
            <p>Partners</p>
          </div>
        </div>
      </div>
      <div className="footer-subscribe">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        </p>
        <div className="email-text">
          <input type="text" placeholder="Your Email" />
          <a href="">SUBSCRIBE</a>
        </div>
      </div>
    </div>
  );
}
