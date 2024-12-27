import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    updateQuantity: (state, action) => {
      const { id, quantityChange } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityChange;
        if (newQuantity <= 0) {
          // Ürünü sepetten kaldır
          state.totalAmount -= existingItem.totalPrice;
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          // Miktarı güncelle
          const priceChange = existingItem.price * quantityChange;
          existingItem.quantity = newQuantity;
          existingItem.totalPrice += priceChange;
          state.totalAmount += priceChange;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
