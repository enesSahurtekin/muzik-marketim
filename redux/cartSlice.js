import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      const productIndex = action.payload;
      const removedProduct = state.products[productIndex];
      state.products.splice(productIndex, 1);
      state.quantity -= removedProduct.quantity;
      state.total -= removedProduct.price * removedProduct.quantity;
    },
    reset: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;

