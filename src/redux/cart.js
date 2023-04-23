import { createSlice } from "@reduxjs/toolkit";

export const myCartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    itemIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let newList = [...state.items, action.payload];
      state.items = newList;
      state.itemIds = newList.map((listItem) => listItem.id);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.itemIds = state.itemIds.filter((item) => item !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = myCartSlice.actions;

export default myCartSlice.reducer;
