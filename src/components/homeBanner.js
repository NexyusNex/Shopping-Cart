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
          <img src={catTshirt} alt="cat tshirt item"></img>
          <h2>Cat T-Shirt</h2>
          <p>$22.99</p>
        </div>
        <div className="banner-item">
          <img src={blueSkirt} alt="blue skirt item"></img>
          <h2>Blue skirt</h2>
          <p>$49.99</p>
        </div>
        <div className="banner-item">
          <img src={purpleDress} alt="purple dress item"></img>
          <h2>Purple Dress</h2>
          <p>$59.99</p>
        </div>
      </div>
    </div>
  );
}
