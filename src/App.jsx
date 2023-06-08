import React from "react";
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import NavMenu from "./components/NavMenu/NavMenu";
import History from "./pages/History/History";
import Coupons from "./pages/Coupons/Coupons";
function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/history" element={<History />} />
        <Route path="/coupons" element={<Coupons />} />
      </Routes>
    </>
  );
}

export default App;
