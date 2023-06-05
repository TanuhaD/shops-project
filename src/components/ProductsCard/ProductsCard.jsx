import React, { useState } from "react";
import css from "./ProductsCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectShopProducts, selectShoppingCart } from "../../redux/selectors";
import { addToCart } from "../../redux/slice";
const ProductsCard = ({ choiceShop }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectShoppingCart);
  const shopProducts = useSelector(selectShopProducts);
  const chosenShopProducts = shopProducts.find((product) => {
    return product.id === choiceShop;
  });
  const handleAddProduct = (id, name, price) => {
    dispatch(addToCart({ id, name, price, count: 1 }));
  };
  return (
    <div className={css.container}>
      <ul className={css.listCart}>
        {chosenShopProducts?.products.map(({ id, name, price }) => {
          const disabled = shoppingCart.some((product) => product.id === id);
          return (
            <li key={id} className={css.cart}>
              <img
                className={css.img}
                src="#"
                alt=""
                style={{
                  width: "120px",
                  height: "60px",
                }}
              />
              <p className={css.text}>title: {name}</p>
              <p className={css.price}>price: {price}</p>
              <button
                onClick={() => handleAddProduct(id, name, price)}
                style={
                  disabled
                    ? {
                        opacity: "0.4",
                        backgroundColor: "grey",
                        cursor: "auto",
                      }
                    : null
                }
                className={css.btn}
                disabled={disabled}
              >
                Add Product
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsCard;
