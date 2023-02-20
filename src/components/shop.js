import Header from "./header";
import "../style/shop.css";

export default function Shop() {
  return (
    <div className="Shop">
      <Header></Header>
      <div className="categories">
        <button className="men-button">Men</button>
        <button className="women-button">Women</button>
      </div>
      <div className="item-list"></div>
    </div>
  );
}
