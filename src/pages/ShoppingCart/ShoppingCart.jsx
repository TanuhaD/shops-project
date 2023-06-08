import React from "react";
import css from "./ShoppingCart.module.css";
import FormRegister from "../../components/FormRegister/FormRegister";
import OrderSheet from "../../components/OrderSheet/OrderSheet";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../../redux/selectors";
import ButtonTotal from "../../components/ButtonTotal/ButtonTotal";

const ShoppingCart = () => {
  const shoppingCart = useSelector(selectShoppingCart);
  const total = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  return (
    <div className={css.container}>
      <FormRegister />
      <div className={css.wrapper}>
        <OrderSheet />
        <ButtonTotal total={total} />
      </div>
    </div>
  );
};

export default ShoppingCart;
