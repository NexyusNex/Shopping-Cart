import "../style/about.css";
import Footer from "./footer";
import Header from "./header";

export default function About(props) {
  return (
    <div className="about">
      <Header cart={props.cart}></Header>
      <Footer></Footer>
    </div>
  );
}
