import "../style/homeshirt.css";
import shirtImg from "../images/home/luis-quintero-3qqiMT2LdR8-unsplash.jpg";

export default function HomeShirt() {
  return (
    <div className="home-shirt">
      <div className="home-shirt-content">
        <img
          src={shirtImg}
          alt="Tshirt showcase"
          className="home-shirt-img"
        ></img>
        <h1>Check this out!</h1>
        <p>Our amazing black T-shirt is going to make your days better!</p>
      </div>
    </div>
  );
}
