import React, { useState } from "react";
import css from "./ShoppingCart.module.css";
import FormRegister from "../../components/FormRegister/FormRegister";
import OrderSheet from "../../components/OrderSheet/OrderSheet";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../../redux/selectors";
import ButtonTotal from "../../components/ButtonTotal/ButtonTotal";

const ShoppingCart = () => {
  const shoppingCart = useSelector(selectShoppingCart);
  const [closeModalFoo, setCloseModalFoo] = useState(null);
  const total = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  return (
    <div className={css.container}>
      <FormRegister
        shoppingCart={shoppingCart}
        total={total}
        closeModalFoo={closeModalFoo}
      />
      <div className={css.wrapper}>
        <OrderSheet />
        <ButtonTotal total={total} setCloseModalFoo={setCloseModalFoo} />
      </div>
    </div>
  );
};

export default ShoppingCart;
