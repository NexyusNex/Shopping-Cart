import "../style/homeshirt.css";
import shirtImg from "../images/home/ivana-cajina-_7LbC5J-jw4-unsplash.jpg";
import shirtItemImg from "../images/clothes/Isolated_black_t-shirt_front.png";
import { Link } from "react-router-dom";

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
          <h1>Get comfortable!</h1>
          <p>
            Our amazing black T-shirt made from the finest soft cotton is going
            to make your days better!
          </p>
          <Link to="/shop/men/1">
            <button className="home-shirt-button">See now</button>
          </Link>
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
