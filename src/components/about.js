import "../style/about.css";
import Footer from "./footer";
import Header from "./header";

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
      </div>
      <Footer></Footer>
    </div>
  );
}
