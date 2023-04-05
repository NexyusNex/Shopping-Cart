import "../style/homesale.css";
import saleImg from "../images/home/arnel-hasanovic-Nl-SXO4FAHw-unsplash.jpg";

export default function HomeSale() {
  return (
    <div className="home-sale" style={{ backgroundImage: `url(${saleImg})` }}>
      <div className="home-sale-text">
        <h1>Fashion Trends</h1>
        <p>
          We curate our selection to spark your creativity and individuality.
          Each item can be styled in a dozen different ways, complementing a
          wide range of aesthetics, from hippie-inspired looks to edgier vibes.
          So you can discover the foundations and finishing touches for any
          outfit.
        </p>
      </div>
    </div>
  );
}
