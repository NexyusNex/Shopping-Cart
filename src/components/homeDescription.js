import "../style/homedescription.css";
import fashionLeft from "../images/home/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import fashionRight from "../images/home/tyler-nix-Zhh3WM2ko3s-unsplash.jpg";
import { useRef } from "react";
import { useEffect } from "react";

export default function HomeDescription() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("desc-show");
        } else {
          entry.target.classList.remove("desc-show");
        }
      });
    });
    const hidden = document.querySelectorAll(".desc-hidden");
    hidden.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-description">
      <div className="home-description-left desc-hidden">
        <div className="home-desc-hline-left"></div>
        <img
          src={fashionLeft}
          alt="fashion img left"
          className="desc-hidden"
        ></img>
        <div className="home-description-left-text">
          <h1>What we do</h1>
          <p>
            Here in clothes shop we want to give our customers the best quality
            and design.
          </p>
        </div>
      </div>
      <div className="home-description-right desc-hidden">
        <div className="home-description-right-text">
          <h1>Why we do it</h1>
          <p>Because, like you, we love fashion!</p>
        </div>
        <img
          src={fashionRight}
          alt="fashion img right"
          className="desc-hidden"
        ></img>
        <div className="home-desc-hline-right"></div>
      </div>
    </div>
  );
}
