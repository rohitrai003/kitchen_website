import AboutUs from "./Sections/About_Us/AboutUs.jsx";
import WhyChooseUs from "./Sections/Why_Choose_Us/WhyChooseUs.jsx";
import PromoVideo from "./Sections/Promo_Video/PromoVideo.jsx";
import AboutUsImages from "./Sections/About_Us_Images/AboutUsImages.jsx";
import Company from "./Sections/Company/Company.jsx";
import Line from "../../components/Line/Line.jsx";
import OurProject from "./Sections/Our_Project/OurProject.jsx";
import OurClient from "./Sections/Our_Client/OurClient.jsx";
import ProductInfo from "./Sections/Product_Info/ProductInfo.jsx";
import OurBlog from "./Sections/Our_Blog/OurBlog.jsx";
import Schedule from "../Footer/Sections/Schedule/Schedule.jsx";

export default function Body() {
  return (
    <div
      className="body"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <AboutUs />
      <AboutUsImages />
      <WhyChooseUs />
      <PromoVideo />
      <Company />
      <Line />
      <OurProject />
      <OurClient />
      <ProductInfo />
      <OurBlog />
    </div>
  );
}
