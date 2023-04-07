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
      <div class="custom-shape-divider-bottom-1680893884">
        <div class="custom-shape-divider-bottom-1680894081">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
