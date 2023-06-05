import React from "react";
import css from "./ShopsCart.module.css";
import { useSelector } from "react-redux";
import { selectShop, selectShopIdToOrder } from "../../redux/selectors";
const ShopsCart = ({ handleChoiceShop }) => {
  const shops = useSelector(selectShop);
  const shopIdToOrder = useSelector(selectShopIdToOrder);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Shops :</h1>
      <ul className={css.wrapperCart}>
        {shops.map(({ id, name }) => (
          <li
            style={
              shopIdToOrder && shopIdToOrder !== id
                ? {
                    opacity: "0.4",
                    backgroundColor: "grey",
                    cursor: "auto",
                  }
                : null
            }
            className={css.cart}
            key={id}
            onClick={shopIdToOrder ? () => {} : () => handleChoiceShop(id)}
          >
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsCart;
