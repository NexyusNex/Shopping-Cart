import Header from "./header";
import "../style/payout.css";
import blackFrontSweater from "../images/clothes/black-front-sweater.jpg";
import blackTshirt from "../images/clothes/Isolated_black_t-shirt_front.png";
import whiteTshirt from "../images/clothes/Isolated_white_t-shirt_front.png";

export default function Payout(props) {
  return (
    <div className="Payout">
      <Header cart={props.cart}></Header>
      <div className="cart-container">
        <h2>My cart({props.cart.length})</h2>
        <div className="cart-item-container"></div>
        {props.cart.map((item) => {
          return (
            <div className="buy-item" key={item.id}>
              <img src={item.img} alt={item.name}></img>
              {item.name}, ${item.cost}
            </div>
          );
        })}
      </div>
    </div>
  );
}
