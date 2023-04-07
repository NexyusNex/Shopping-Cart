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
            <li>
              <button>Home</button>
            </li>
          </Link>
          <Link to="/shop/men/">
            <li>
              <button>Shop</button>
            </li>
          </Link>
          <li>
            <button>About</button>
          </li>
        </ul>
        <div className="cart">
          <Link to="/Payout">
            <button>
              <img src={shoppingCart} alt="shopping-cart"></img>
            </button>
          </Link>

          <div className="item-num">
            {props.cart.reduce((total, item) => {
              total = total + item.count;
              if (total >= 1000) {
                const number = String(total).charAt(0);
                return number + "k+";
              }
              return total;
            }, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
