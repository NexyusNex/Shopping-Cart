import "../style/homebanner.css";
import catTshirt from "../images/clothes/neko-front-shirt.png";
import blueSkirt from "../images/clothes/blue-skirt.png";
import purpleDress from "../images/clothes/purple-female-dress.png";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <h1>We also have:</h1>
      <div className="banner-container">
        <div className="banner-item">
          <img
            src={catTshirt}
            alt="cat tshirt item"
            className="banner-img"
          ></img>
        </div>
        <div className="banner-item">sdsd</div>
        <div className="banner-item">sdsd</div>
      </div>
    </div>
  );
}
