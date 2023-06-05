import React from "react";
import css from "./ShopsCart.module.css";
import { useSelector } from "react-redux";
import { selectShop } from "../../redux/selectors";
const ShopsCart = ({ handleChoiceShop }) => {
  const shops = useSelector(selectShop);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Shops :</h1>
      <ul className={css.wrapperCart}>
        {shops.map(({ id, name }) => (
          <li
            className={css.cart}
            key={id}
            onClick={() => handleChoiceShop(id)}
          >
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsCart;
