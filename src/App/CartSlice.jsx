import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  openCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.cart.find((item) => item.id == action.payload.id);
      if (item) return;

      state.cart.push(action.payload);
      state.openCart = true;
    },
    closeCart(state) {
      state.openCart = false;
    },
    OpenCart(state) {
      state.openCart = true;
    },
    Increment(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },
    Decrement(state, action) {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const CartSelector = (state) => state.cart.cart;
export const CartOpen = (state) => state.cart.openCart;
export const {
  addItem,
  closeCart,
  OpenCart,
  Increment,
  Decrement,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
