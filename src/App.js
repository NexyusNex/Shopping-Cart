import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import HomeDescription from "./components/homeDescription";
import HomeFav from "./components/homeFav";

function App(props) {
  return (
    <div className="App">
      <Header cart={props.cart}></Header>
      <Home></Home>
      <HomeDescription></HomeDescription>
      <HomeFav></HomeFav>
      <Footer></Footer>
    </div>
  );
}

export default App;
