import "../style/header.css";
import shoppingCart from "../images/shopping-cart.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 className="site-title">Clothes shop</h1>
      </Link>
      <div className="header-right">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Shop">
            <li>Shop</li>
          </Link>
          <Link to="/pdp">
            <li>About</li>
          </Link>
        </ul>
        <div className="cart">
          <Link to="/Payout">
            <img src={shoppingCart} alt="shopping-cart"></img>
          </Link>

          <div className="item-num">
            {props.cart.reduce(
              (total, item) => (total = total + item.count),
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
