import "../style/aboutreview.css";
import face1 from "../images/review/christian-buehner-DItYlc26zVI-unsplash-modified.png";
import face2 from "../images/review/edward-cisneros-_H6wpor9mjs-unsplash-modified.png";
import face3 from "../images/review/joseph-gonzalez-iFgRcqHznqg-unsplash-modified.png";
import starsvg from "../images/star.svg";

export default function AboutReview() {
  return (
    <div className="about-review">
      <div className="about-review-title">
        <h1>
          Customer <span>review</span>
        </h1>
      </div>
      <div className="about-review-container">
        <div className="review">
          <img src={face1} alt="review face1"></img>
          <h3>Markus Robinson</h3>
          <div className="star-container">
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
          </div>
          <h2>I love this shop!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas tristique libero at varius. Nam aliquet placerat sem at
            tempus. Proin ut libero sapien. Praesent.
          </p>
        </div>
        <div className="review">
          <img src={face2} alt="review face2"></img>
          <h3>Maria Williams</h3>
          <div className="star-container">
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
          </div>
          <h2>I bought my favorite shirt here!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            porttitor tempus ante vel auctor. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Vivamus.
          </p>
        </div>
        <div className="review">
          <img src={face3} alt="review face3"></img>
          <h3>John Brown</h3>
          <div className="star-container">
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
            <img className="svg" src={starsvg} alt="star"></img>
          </div>
          <h2>Do not go anywhere else!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim
            id nunc bibendum blandit sit amet vehicula ex. Aenean vel gravida
            nisi. Donec eu.
          </p>
        </div>
      </div>
    </div>
  );
}
