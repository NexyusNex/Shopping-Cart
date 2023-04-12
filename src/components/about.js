import "../style/about.css";
import Footer from "./footer";
import Header from "./header";
import aboutVideo from "../video/about-video-fashion.mp4";
import AboutReview from "./aboutReview";

export default function About(props) {
  return (
    <div className="about">
      <Header cart={props.cart}></Header>
      <div className="about-container">
        <div className="about-introduction">
          <h4>OUR MISSION</h4>
          <h1>Making fashion available to everyone</h1>
          <p>
            We are a simple fashion company that ensures high quality clothes
            for everyone, from kids to adults. Our brands are well known and our
            costs cheap. Even if you dont follow fashion, you'll want to after
            you visit us.
          </p>
        </div>
        <div className="about-video">
          <div className="about-video-text">
            <h4>OUR PEOPLE</h4>
            <h1>Creating a community for impact</h1>
            <p>
              Clothes shop has grown from 5 people in a shop to 5,000 across the
              globe. With over 1,000,000 businesses powered by Clothes shop, we
              care deeply about the work we do. We're constant learners who
              thrive on change and seek to have an impact on everything we do.
            </p>
          </div>
          <video
            disablePictureInPicture
            loop
            autoPlay
            muted
            src={aboutVideo}
          ></video>
        </div>
        <AboutReview></AboutReview>
      </div>
      <Footer></Footer>
    </div>
  );
}
