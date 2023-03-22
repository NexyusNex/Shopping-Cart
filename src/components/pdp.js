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
          <p className="product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            auctor gravida orci, sit amet bibendum mauris suscipit semper.
            Curabitur bibendum convallis tellus non porta. Nunc bibendum
            interdum justo. Cras facilisis est cursus risus cursus scelerisque.
            Duis convallis felis vel augue dictum viverra in ac ipsum. Nunc ac
            consequat nulla, et consectetur est. Pellentesque ut dapibus tortor.
            Mauris vel placerat arcu, nec condimentum mauris. In fringilla
            turpis augue, eu feugiat neque bibendum eget. Suspendisse potenti.
            Praesent id congue urna. Curabitur mattis lorem eu efficitur
            porttitor. Mauris at laoreet quam.
          </p>
          <h3>Color:</h3>
          <div className="color-picker">
            <div className="color black">
              <button></button>
            </div>
          </div>
          <h3>Size:</h3>
          <select className="size-select">
            <option>XS</option>
            <option>S</option>
            <option selected>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
