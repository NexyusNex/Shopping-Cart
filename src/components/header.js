import "../style/header.css";
import shoppingCart from "../images/shopping-cart.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
  function showCart() {
    console.log(props.cart);
  }

  return (
    <div className="header">
      <h1>Clothes shop</h1>
      <div className="header-right">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Shop">
            <li>Shop</li>
          </Link>
          <li>About</li>
        </ul>
        <img src={shoppingCart} alt="shopping-cart" onClick={showCart}></img>
        <div className="item-num">{props.cart.length}</div>
      </div>
    </div>
  );
}
