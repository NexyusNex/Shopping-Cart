import Header from "./header";
import "../style/shop.css";
import { useState } from "react";

export default function Shop() {
  const [itemList, setitemList] = useState([
    {
      id: 0,
      name: "Black Front Sweater",
      cost: "59.99$",
    },
    {
      id: 1,
      name: "Black T-Shirt",
      cost: "22.99$",
    },
  ]);

  return (
    <div className="Shop">
      <Header></Header>
      <div className="categories">
        <button className="men-button">Men</button>
        <button className="women-button">Women</button>
      </div>
      <div className="item-container">
        <div className="item-list">
          {itemList.map((item) => {
            return (
              <div className="item" key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
