export const selectShop = (state) => {
  return state.shopsStore.shops;
};

export const selectShopProducts = (state) => {
  return state.shopsStore.shopProducts;
};

export const selectShoppingCart = (state) => {
  return state.shopsStore.shoppingCart;
};
