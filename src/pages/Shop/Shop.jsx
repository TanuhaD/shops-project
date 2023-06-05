import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import ShopsCart from "../../components/ShopsCart/ShopsCart";
import { getShops } from "../../redux/shopsOperations";
import css from "./Shop.module.css";
import { setChosenShopId } from "../../redux/slice";
const Shop = () => {
  const dispatch = useDispatch();
  const handleChoiceShop = (id) => {
    dispatch(setChosenShopId(id));
  };
  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ShopsCart handleChoiceShop={handleChoiceShop} />
      <ProductsCard />
    </div>
  );
};

export default Shop;
