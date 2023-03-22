import Footer from "./footer";
import Header from "./header";
import "../style/pdp.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Pdp(props) {
  const clothesCollectionRef = collection(db, "Clothes");
  const clothesImages = require.context("../images/clothes", true);
  const [productItem, setProductItem] = useState([]);

  let params = useParams(":productId");

  useEffect(() => {
    GetProductItem();
    console.log(productItem);
  }, []);

  const GetProductItem = async () => {
    try {
      const data = await getDocs(clothesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: Number(doc.id),
      }));
      console.log(filteredData);
      setProductItem(
        filteredData.filter(
          (product) => product.id === Number(params.productId)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Pdp">
      <Header cart={props.cart}></Header>

      {productItem.map((item) => {
        return (
          <div className="product-container">
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
                est. Pellentesque ut dapibus tortor. Mauris vel placerat arcu,
                nec condimentum mauris. In fringilla turpis augue, eu feugiat
                neque bibendum eget. Suspendisse potenti. Praesent id congue
                urna. Curabitur mattis lorem eu efficitur porttitor. Mauris at
                laoreet quam.
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
              <button className="purchase-button">Add to cart</button>
            </div>
          </div>
        );
      })}

      <Footer></Footer>
    </div>
  );
}
