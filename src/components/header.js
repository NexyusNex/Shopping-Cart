import "../style/header.css";
import shoppingCart from "../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import cart from "./cart";
import { useEffect } from "react";

export default function Header() {
  function showCart() {
    console.log(cart);
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
        <div className="item-num">{cart.length}</div>
      </div>
    </div>
  );
}
