import "../style/homefav.css";
import saleImg from "../images/home/arnel-hasanovic-Nl-SXO4FAHw-unsplash.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeFav() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hs-show");
        }
      });
    });
    const hidden = document.querySelectorAll(".hs-hidden");
    hidden.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-sale" style={{ backgroundImage: `url(${saleImg})` }}>
      <div className="home-sale-text hs-hidden">
        <h1>Fashion Trends</h1>
        <p>
          We curate our selection to spark your creativity and individuality.
          Each item can be styled in a dozen different ways, complementing a
          wide range of aesthetics, from hippie-inspired looks to edgier vibes.
          So you can discover the foundations and finishing touches for any
          outfit.
        </p>
        <Link to="/shop/women/5">
          <button className="fav-item-btn">View our favorite item</button>
        </Link>
      </div>
    </div>
  );
}
