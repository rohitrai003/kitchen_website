import BlogDiv from "../../../../components/blog_div/BlogDiv";
import "./OurBlog.css";

export default function OurBlog() {
  return (
    <div className="ourblog">
      <h2>OUR BLOG</h2>
      <h1>Follow the latest news</h1>
      <div className="ourblog-collection">
        <BlogDiv
          date={"24 Jun 2024"}
          title={"A Stunning Classic Shaker Kitchen In Halesowen"}
          image={
            "https://www.homeandlifestyle.es/wp-content/uploads/2022/06/pdftohtml-49-49_1.png"
          }
        />
        <BlogDiv
          date={"28 Jun 2024"}
          title={"Galley Style Shaker Kitchen In Redditch"}
          image={
            "https://buildingandinteriors.com/wp-content/uploads/cwv-webp-images/2022/10/bhnce-featured.jpg.webp"
          }
        />
        <BlogDiv
          date={"28 Jun 2024"}
          title={"Galley Style Kitchen"}
          image={
            "https://www.ksa.co.za/ksa-admin2/resources/0-pascal0j1a1156960px-w960.jpg"
          }
        />
      </div>
    </div>
  );
}
