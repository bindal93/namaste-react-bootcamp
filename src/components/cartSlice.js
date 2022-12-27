import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state) => {
      state.value.pop();
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
