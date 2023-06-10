export const selectShop = (state) => {
  return state.shopsStore.shops;
};

export const selectShopProducts = (state) => {
  return state.shopsStore.shopProducts;
};

export const selectShoppingCart = (state) => {
  return state.shopsStore.shoppingCart;
};

export const selectChosenShopId = (state) => {
  return state.shopsStore.chosenShopId;
};

export const selectShopIdToOrder = (state) => {
  return state.shopsStore.shopIdToOrder;
};

export const selectDiscount = (state) => {
  return state.shopsStore.discount;
};
