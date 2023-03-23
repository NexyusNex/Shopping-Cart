import Header from "./header";
import "../style/shop.css";
import Footer from "./footer";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Shop(props) {
  const clothesCollectionRef = collection(db, "Clothes");
  const [itemList, setItemList] = useState([]);
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);
  const clothesImages = require.context("../images/clothes", true);
  let params = useParams(":categoryParams");

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

      if (params.categoryParams !== "women") {
        setItemList(
          filteredData.filter((element) => element.gender === "male")
        );
        document.querySelector(".men-button").classList.add("selected");
      }

      if (params.categoryParams === "women") {
        setItemList(
          filteredData.filter((element) => element.gender === "female")
        );
        document.querySelector(".women-button").classList.add("selected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function openFemaleCategory(e) {
    params.categoryParams = "women";
    document.querySelector(".men-button").classList.remove("selected");
    e.target.classList.add("selected");
    setItemList(femaleList);
  }

  function openMaleCategory(e) {
    params.categoryParams = "men";
    document.querySelector(".women-button").classList.remove("selected");
    e.target.classList.add("selected");
    setItemList(maleList);
  }

  return (
    <div className="Shop">
      <Header cart={props.cart}></Header>
      <div className="categories">
        <button className="men-button" onClick={openMaleCategory}>
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
                <Link to={`/shop/${params.categoryParams}/${item.id}`}>
                  <button
                    className="item-btn"
                    id={item.id}
                    data-name={item.name}
                  >
                    See product
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
