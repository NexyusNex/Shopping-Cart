import "../style/homedescription.css";
import fashionLeft from "../images/home/freestocks-_3Q3tsJ01nc-unsplash.jpg";

export default function HomeDescription() {
  return (
    <div className="home-description">
      <div className="home-description-left">
        <div className="home-description-left-text">
          <h1>What we do</h1>
          Here in clothes shop we want to give our customers the best quality
          and design
        </div>
        <img src={fashionLeft} alt="fashion img left"></img>
      </div>
      <div className="home-description-right"></div>
    </div>
  );
}
