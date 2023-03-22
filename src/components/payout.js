import Header from "./header";
import "../style/payout.css";
import Footer from "./footer";

export default function Payout(props) {
  const clothesImages = require.context("../images/clothes", true);

  const total = props.cart.reduce(
    (total, item) => (total = total + item.cost * item.count),
    0
  );

  function deleteItem(e) {
    let clone = [...props.cart].filter(
      (item) => item.id !== Number(e.target.id)
    );
    props.setCart(clone);
  }

  function increment(e) {
    let clone = [...props.cart];
    clone.forEach((item) => {
      if (item.id === Number(e.target.id)) item.count++;
    });
    props.setCart(clone);
  }

  function decrement(e) {
    let clone = [...props.cart];
    clone.forEach((item) => {
      if (item.id === Number(e.target.id) && item.count !== 1) item.count--;
    });
    props.setCart(clone);
  }

  return (
    <div className="Payout">
      <Header cart={props.cart}></Header>
      <div className="cart-container">
        <h2>
          My cart(
          {props.cart.reduce((total, item) => (total = total + item.count), 0)})
        </h2>
        <div className="cart-item-container"></div>
        {props.cart.map((item) => {
          return (
            <div className="buy-item" key={item.id}>
              <img src={clothesImages(`./${item.img}`)} alt={item.name}></img>
              <div className="buy-item-text">
                <p>{item.name}</p> <p>${item.cost}</p>
              </div>
              <div className="buy-item-input">
                <div className="count-box">
                  <button className="count" id={item.id} onClick={decrement}>
                    -
                  </button>
                  <div>{item.count}</div>
                  <button className="count" id={item.id} onClick={increment}>
                    +
                  </button>
                </div>
                <button className="delete" id={item.id} onClick={deleteItem}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <div className="confirm-purchase">
          <h3>Total</h3>
          <div className="text-seperation">
            <p>Sub total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="text-seperation">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="text-seperation total">
            <p>Total(VAT incl.)</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button>ORDER</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
