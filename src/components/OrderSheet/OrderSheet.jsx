import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./OrderSheet.module.css";

import { selectShoppingCart } from "../../redux/selectors";
import {
  changeCountById,
  removeProductCart,
  setShopIdToOrder,
} from "../../redux/slice";
const OrderSheet = () => {
  const shopCart = useSelector(selectShoppingCart);

  const dispatch = useDispatch();

  const handleCountChange = ({ id, count }) => {
    dispatch(changeCountById({ id, count }));
    return;
  };

  const handleDeleteProductFromCart = (id) => {
    dispatch(removeProductCart(id));
    dispatch(setShopIdToOrder(""));
  };
  return (
    <div className={css.container}>
      <ul>
        {shopCart.map(({ id, name, price, count }) => (
          <li key={id} className={css.cart}>
            <img
              src="https://placehold.co/300x150"
              alt={name}
              style={{
                width: "300px",
                height: "150px",
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            />
            <div className={css.wrapper}>
              <p className={css.text}>{name}</p>
              <p className={css.text}>{price}$</p>
              <input
                type="number"
                min="0"
                max="100"
                className={css.input}
                onChange={(e) =>
                  handleCountChange({ id, count: +e.target.value })
                }
                value={count}
              />
            </div>
            <button
              type="button"
              onClick={() => handleDeleteProductFromCart(id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSheet;
