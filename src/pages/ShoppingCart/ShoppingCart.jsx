import React, { useState } from "react";
import css from "./ShoppingCart.module.css";
import FormRegister from "../../components/FormRegister/FormRegister";
import OrderSheet from "../../components/OrderSheet/OrderSheet";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../../redux/selectors";

const ShoppingCart = () => {
  const shoppingCart = useSelector(selectShoppingCart);
  const total = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);
  return (
    <div className={css.container}>
      <FormRegister total={total} />
      <OrderSheet />
      <p className={css.total}>total: {total}</p>
    </div>
  );
};

export default ShoppingCart;
