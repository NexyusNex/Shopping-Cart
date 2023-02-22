import Header from "./header";
import "../style/shop.css";
import blackFrontSweater from "../images/clothes/black-front-sweater.jpg";
import blackTshirt from "../images/clothes/Isolated_black_t-shirt_front.png";
import whiteTshirt from "../images/clothes/Isolated_white_t-shirt_front.png";

export default function Shop(props) {
  const itemList = [
    {
      id: 0,
      name: "Black Front Sweater",
      cost: 59.99,
      img: blackFrontSweater,
    },
    {
      id: 1,
      name: "Black T-Shirt",
      cost: 22.99,
      img: blackTshirt,
    },
    {
      id: 2,
      name: "White T-Shirt",
      cost: 24.99,
      img: whiteTshirt,
    },
  ];

  function addToCart(e) {
    const id = e.target.id;
    props.setCart((cart) => [...cart, itemList[id]]);
  }

  return (
    <div className="Shop">
      <Header cart={props.cart}></Header>
      <div className="categories">
        <button className="men-button">Men</button>
        <button className="women-button">Women</button>
      </div>
      <div className="item-container">
        <div className="item-list">
          {itemList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.img} alt={item.name}></img>
                <div className="item-description">
                  <p>{item.name}</p> <p>${item.cost}</p>
                </div>
                <button className="item-btn" id={item.id} onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
