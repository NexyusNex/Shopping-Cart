import "../style/homeshirt.css";
import shirtImg from "../images/home/ivana-cajina-_7LbC5J-jw4-unsplash.jpg";
import shirtItemImg from "../images/clothes/Isolated_black_t-shirt_front.png";

export default function HomeShirt() {
  return (
    <div className="home-shirt">
      <div className="home-shirt-content">
        <img
          src={shirtImg}
          alt="Tshirt showcase img"
          className="home-shirt-img"
        ></img>
        <div className="home-shirt-content-text">
          <h1>Check this out!</h1>
          <p>Our amazing black T-shirt is going to make your days better!</p>
        </div>
        <img
          src={shirtItemImg}
          alt="Tshirt item img"
          className="home-shirt-item-img"
        ></img>
      </div>
    </div>
  );
}
