import CustomButton from "../../../../components/custom_button/CustomButton";
import "./OurProject.css";
import Anniversary from "../../../../assets/icons/25.png";

export default function OurProject() {
  return (
    <div className="ourproject">
      <div className="ourproject-text">
        <h2>OUR PROJECT</h2>
        <h1>Explore our kitchen designs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          facere, commodi numquam iste quo tempora rerum voluptatum repudiandae
          quis corrupti fugit est nemo. Fugit reprehenderit voluptates quibusdam
          illo repellat dolor?
        </p>
      </div>
      <div className="ourproject-images">
        <img
          src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="images"
        />
        <img
          src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/kitchen-1712908147-YQmUX/7-1712908166-0OnAo.jpg"
          alt="images"
        />
        <img
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/03113728/luxury-modern-kitchen-designs-regalia.jpg"
          alt="images"
        />
        <img
          src="https://www.oppoliahome.com/wp-content/uploads/2023/04/blue-green-kitchen-cabinets-modern-style-obk23-l10-2.webp"
          alt="images"
        />
        <img
          src="https://www.homeandlifestyle.es/wp-content/uploads/2022/06/pdftohtml-49-49_1.png"
          alt="images"
        />
        <img
          src="https://hausod.com/wp-content/uploads/2022/08/csm_schueller-kueche-elba-schiefer-indischrot-kochinsel-gesamt_13b51dbc34.jpeg"
          alt="images"
        />
      </div>
      <div className="ourproject-review">
        <img
          className="review-image"
          src="https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_2000x.jpg?v=1653076425"
        ></img>
        <div className="review-text">
          <img src={Anniversary} alt="Image" />
          <h1>
            Stunning kitchens,
            <br />
            simplified process
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            ut tempore ea magni quo culpa? Qui quod perspiciatis cumque
            adipisci, ea quae nostrum accusantium ullam illum praesentium
            deserunt sit rerum.
          </p>
          <CustomButton color={"#FFD700"} title={"GET AN INSTANT ESTIMATE"} />
        </div>
      </div>
    </div>
  );
}
