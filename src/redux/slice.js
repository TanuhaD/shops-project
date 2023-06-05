import { createSlice } from "@reduxjs/toolkit";
import { getShops } from "./shopsOperations";

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    chosenShopId: "",
    shopIdToOrder: "",
    shops: [],
    shopProducts: [],
    shoppingCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    },
    changeCountById: (state, { payload }) => {
      const updatedCart = state.shoppingCart.map((product) => {
        return product.id === payload.id
          ? { ...product, count: payload.count }
          : product;
      });
      return { ...state, shoppingCart: updatedCart };
    },
    removeProductCart: (state, action) => {
      const filteredCart = state.shoppingCart.filter((product) => {
        return product.id !== action.payload;
      });
      return { ...state, shoppingCart: filteredCart };
    },
    resetShopingCart: (state) => {
      return { ...state, shoppingCart: [] };
    },
    setChosenShopId: (state, { payload }) => {
      return { ...state, chosenShopId: payload };
    },
    setShopIdToOrder: (state, { payload }) => {
      return { ...state, shopIdToOrder: payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShops.fulfilled, (state, action) => {
        state.shops = action.payload.map((shop) => ({
          id: shop.id,
          name: shop.name,
        }));
        state.shopProducts = action.payload.map((shop) => ({
          id: shop.id,
          products: shop.products,
        }));
      })

      .addCase(getShops.rejected, (action) => {
        console.log(action.payload);
      });
  },
});
export const {
  addToCart,
  removeProductCart,
  addTotal,
  changeCountById,
  resetShopingCart,
  setChosenShopId,
  setShopIdToOrder,
} = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
