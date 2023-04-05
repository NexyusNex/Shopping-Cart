import "../style/homesale.css";
import saleImg from "../images/home/arnel-hasanovic-Nl-SXO4FAHw-unsplash.jpg";

export default function HomeSale() {
  return (
    <div
      className="home-sale"
      style={{ backgroundImage: `url(${saleImg})` }}
    ></div>
  );
}
