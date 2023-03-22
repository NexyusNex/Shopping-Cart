import Footer from "./footer";
import Header from "./header";

export default function Pdp(props) {
  return (
    <div className="Pdp">
      <Header cart={props.cart}></Header>
      <Footer></Footer>
    </div>
  );
}
