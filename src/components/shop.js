import Header from "./header";
import "../style/shop.css";
import Footer from "./footer";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Shop(props) {
  const clothesCollectionRef = collection(db, "Clothes");
  const [itemList, setItemList] = useState([]);
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);
  const clothesImages = require.context("../images/clothes", true);

  useEffect(() => {
    GetClothesList();
  }, []);

  const GetClothesList = async () => {
    try {
      const data = await getDocs(clothesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: Number(doc.id),
      }));
      setMaleList(filteredData.filter((element) => element.gender === "male"));
      setFemaleList(
        filteredData.filter((element) => element.gender === "female")
      );
      setItemList(filteredData.filter((element) => element.gender === "male"));
    } catch (error) {
      console.log(error);
    }
  };

  function addToCart(e) {
    const clickedItem = itemList.filter(
      (element) => element.name === e.target.getAttribute("data-name")
    );
    console.log(clickedItem);
    let clone = [...props.cart];
    let bool = false;

    clone.forEach((item) => {
      console.log(itemList);
      console.log(clone);
      if (item.name === clickedItem[0].name) {
        item.count += 1;
        props.setCart(clone);
        bool = true;
      }
    });

    if (!bool) props.setCart((cart) => [...cart, clickedItem[0]]);
  }

  function openFemaleCategory(e) {
    document.querySelector(".men-button").classList.remove("selected");
    e.target.classList.add("selected");
    setItemList(femaleList);
  }

  function openMaleCategory(e) {
    document.querySelector(".women-button").classList.remove("selected");
    e.target.classList.add("selected");
    setItemList(maleList);
  }

  return (
    <div className="Shop">
      <Header cart={props.cart}></Header>
      <div className="categories">
        <button className="men-button selected" onClick={openMaleCategory}>
          Men
        </button>
        <button className="women-button" onClick={openFemaleCategory}>
          Women
        </button>
      </div>
      <div className="item-container">
        <div className="item-list">
          {itemList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={clothesImages(`./${item.img}`)} alt={item.name}></img>
                <div className="item-description">
                  <p>{item.name}</p> <p>${item.cost}</p>
                </div>
                <button
                  className="item-btn"
                  id={item.id}
                  data-name={item.name}
                  onClick={addToCart}
                >
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
