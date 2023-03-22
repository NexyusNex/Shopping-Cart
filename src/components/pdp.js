import Footer from "./footer";
import Header from "./header";
import "../style/pdp.css";

export default function Pdp(props) {
  return (
    <div className="Pdp">
      <Header cart={props.cart}></Header>
      <div className="product-container">
        <div className="img"></div>
        <div className="product-info">
          <h1>Product name</h1>
          <p className="cost-text">$22.99</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
