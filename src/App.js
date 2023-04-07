import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import HomeBanner from "./components/homeBanner";
import HomeDescription from "./components/homeDescription";
import HomeFav from "./components/homeFav";
import HomeShirt from "./components/homeShirt";

function App(props) {
  return (
    <div className="App">
      <Header cart={props.cart}></Header>
      <Home></Home>
      <HomeDescription></HomeDescription>
      <HomeFav></HomeFav>
      <HomeShirt></HomeShirt>
      <HomeBanner></HomeBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
