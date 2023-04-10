import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shop from "./shop";
import Payout from "./payout";
import Pdp from "./pdp";
import About from "./about";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<App cart={cart} setCart={setCart} />} />
        <Route
          path="/shop/:categoryParams/"
          element={<Shop cart={cart} setCart={setCart} />}
        />
        <Route
          path="/shop/:categoryParams/:productId"
          element={<Pdp cart={cart} setCart={setCart} />}
        />
        <Route
          path="/Payout"
          element={<Payout cart={cart} setCart={setCart} />}
        />
        <Route
          path="/About"
          element={<About cart={cart} setCart={setCart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
