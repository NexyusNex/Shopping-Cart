import "../style/header.css";
import shoppingCart from "../images/shopping-cart.svg";

export default function Header() {
  return (
    <div className="header">
      <h1>Clothes shop</h1>
      <div className="header-right">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
        </ul>
        <img src={shoppingCart} alt="shopping-cart"></img>
      </div>
    </div>
  );
}
