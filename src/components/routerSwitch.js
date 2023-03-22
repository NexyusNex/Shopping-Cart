import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shop from "./shop";
import Payout from "./payout";
import Pdp from "./pdp";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<App cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route
          path="/shop/:productId"
          element={<Pdp cart={cart} setCart={setCart} />}
        />
        <Route
          path="/Payout"
          element={<Payout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
