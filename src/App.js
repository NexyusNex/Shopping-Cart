import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import HomeDescription from "./components/homeDescription";
import HomeSale from "./components/homeSale";

function App(props) {
  return (
    <div className="App">
      <Header cart={props.cart}></Header>
      <Home></Home>
      <HomeDescription></HomeDescription>
      <HomeSale></HomeSale>
      <Footer></Footer>
    </div>
  );
}

export default App;
