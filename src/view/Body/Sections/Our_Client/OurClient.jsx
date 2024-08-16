import "./OurClient.css";

export default function OurClient() {
  return (
    <div className="ourclient">
      <h2>OUR CLIENT</h2>
      <h1>Here's what our satisfied client are saying</h1>
      <div className="comments">
        <div className="review-box">
          <div className="inverted-comma">"</div>
          <div className="reviews">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            porro ut nihil ipsam eaque, error culpa doloremque veniam reiciendis
            non rerum quo a adipisci, obcaecati iusto officia? Velit, ipsa
            inventore?
          </div>
          <div className="profile">
            <div className="avatar"></div>
            <div className="user-profile">
              <h3>Joshua Keith</h3>
              <p>Senior Client</p>
            </div>
          </div>
        </div>
        <div className="review-box">
          <div className="inverted-comma">"</div>
          <div className="reviews">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            porro ut nihil ipsam eaque, error culpa doloremque veniam reiciendis
            non rerum quo a adipisci, obcaecati iusto officia? Velit, ipsa
            inventore?
          </div>
          <div className="profile">
            <div className="avatar"></div>
            <div className="user-profile">
              <h3>Sharon Gunther</h3>
              <p>Fresh Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
