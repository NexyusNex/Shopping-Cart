import Header from "./components/header";
import Home from "./components/home";

function App(props) {
  return (
    <div className="App">
      <Header cart={props.cart}></Header>
      <Home></Home>
    </div>
  );
}

export default App;
