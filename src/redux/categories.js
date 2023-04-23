import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    //Add items to discover, show when app is offline
    updateCategories: (state, action) => {
      state = [...state.items, action.payload];
    },
  },
});

export const { updateCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
