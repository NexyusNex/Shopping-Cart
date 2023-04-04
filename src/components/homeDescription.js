import "../style/homedescription.css";
import fashionLeft from "../images/home/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import fashionRight from "../images/home/tyler-nix-Zhh3WM2ko3s-unsplash.jpg";

export default function HomeDescription() {
  return (
    <div className="home-description">
      <div className="home-description-left">
        <div className="home-desc-hline-left"></div>
        <img src={fashionLeft} alt="fashion img left"></img>
        <div className="home-description-left-text">
          <h1>What we do</h1>
          <p>
            Here in clothes shop we want to give our customers the best quality
            and design.
          </p>
        </div>
      </div>
      <div className="home-description-right">
        <div className="home-description-right-text">
          <h1>Why we do it</h1>
          <p>Because, like you, we love fashion!</p>
        </div>
        <img src={fashionRight} alt="fashion img right"></img>
        <div className="home-desc-hline-right"></div>
      </div>
    </div>
  );
}
