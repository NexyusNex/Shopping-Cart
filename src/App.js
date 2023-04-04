import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import HomeDescription from "./components/homeDescription";

function App(props) {
  return (
    <div className="App">
      <Header cart={props.cart}></Header>
      <Home></Home>
      <HomeDescription></HomeDescription>
      <Footer></Footer>
    </div>
  );
}

export default App;
