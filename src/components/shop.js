import Header from "./header";
import "../style/shop.css";
import Footer from "./footer";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Shop(props) {
  const clothesCollectionRef = collection(db, "Clothes");
  const [itemList, setItemList] = useState([]);
  const clothesImages = require.context("../images/clothes", true);

  useEffect(() => {
    GetClothesList();
  }, []);

  const GetClothesList = async () => {
    try {
      const data = await getDocs(clothesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setItemList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  function addToCart(e) {
    const id = e.target.id;
    let clone = [...props.cart];
    let bool = false;

    clone.forEach((item) => {
      if (item.name === itemList[id].name) {
        item.count += 1;
        props.setCart(clone);
        bool = true;
      }
    });

    if (!bool) props.setCart((cart) => [...cart, itemList[id]]);
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
            console.log(item.img);
            return (
              <div className="item" key={item.id}>
                <img src={clothesImages(`./${item.img}`)} alt={item.name}></img>
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
      <Footer></Footer>
    </div>
  );
}
