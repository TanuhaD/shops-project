import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import ShopsCart from "../../components/ShopsCart/ShopsCart";
import { getShops } from "../../redux/shopsOperations";
import css from "./Shop.module.css";
const Shop = () => {
  const dispatch = useDispatch();
  const [choiceShop, setChoiceShop] = useState("");

  const handleChoiceShop = (id) => {
    setChoiceShop(id);
  };
  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ShopsCart handleChoiceShop={handleChoiceShop} />
      <ProductsCard choiceShop={choiceShop} />
    </div>
  );
};

export default Shop;
