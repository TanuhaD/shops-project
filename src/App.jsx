import React from "react";
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import NavMenu from "./components/NavMenu/NavMenu";
function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shopping" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
