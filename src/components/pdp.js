import Footer from "./footer";
import Header from "./header";
import "../style/pdp.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Pdp(props) {
  const clothesCollectionRef = collection(db, "Clothes");
  const clothesImages = require.context("../images/clothes", true);
  const [productItem, setProductItem] = useState([]);

  let params = useParams(":productId");
  let urlParams = useParams(":categoryParams");

  useEffect(() => {
    GetProductItem();
  }, []);

  const GetProductItem = async () => {
    try {
      const data = await getDocs(clothesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: Number(doc.id),
      }));

      setProductItem(
        filteredData.filter(
          (product) => product.id === Number(params.productId)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  function addToCart(e) {
    let updatedName = `${productItem[0].name} ${
      document.querySelector("select").value
    }`;
    let clone = [...props.cart];
    let bool = false;

    clone.forEach((item) => {
      if (item.name === updatedName) {
        item.count += 1;
        props.setCart(clone);
        bool = true;
      }
    });

    if (!bool) {
      props.setCart((cart) => [
        ...cart,
        {
          name: updatedName,
          cost: productItem[0].cost,
          id: productItem[0].id,
          count: productItem[0].count,
          img: productItem[0].img,
        },
      ]);
    }
  }

  return (
    <div className="Pdp">
      <Header cart={props.cart}></Header>
      <Link
        to={`/shop/${urlParams.categoryParams}`}
        style={{ textDecoration: "none" }}
      >
        <button className="arrow-back">&lt;</button>
      </Link>

      {productItem.map((item) => {
        return (
          <div className="product-container" key={item.id}>
            <div className="image-container">
              <img src={clothesImages(`./${item.img}`)} alt={item.name}></img>
            </div>

            <div className="product-info">
              <h1>{item.name}</h1>
              <p className="cost-text">${item.cost}</p>
              <p className="product-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor gravida orci, sit amet bibendum mauris
                suscipit semper. Curabitur bibendum convallis tellus non porta.
                Nunc bibendum interdum justo. Cras facilisis est cursus risus
                cursus scelerisque. Duis convallis felis vel augue dictum
                viverra in ac ipsum. Nunc ac consequat nulla, et consectetur
                est. Pellentesque ut dapibus tortor.
              </p>
              <h3>Color:</h3>
              <div className="color-picker">
                <div className="color black">
                  <button className="color-button"></button>
                </div>
              </div>
              <h3>Size:</h3>
              <select className="size-select" defaultValue={"M"}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <button className="purchase-button" onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}

      <Footer></Footer>
    </div>
  );
}
