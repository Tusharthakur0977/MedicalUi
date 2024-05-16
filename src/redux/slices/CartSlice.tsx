/* eslint-disable no-lone-blocks */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CartItemType = {
  id: number;
  name: string;
  color: string;
  price: string;
  image: string;
};

// The state type is now directly an array of CartItemType
type CartState = CartItemType[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      console.log('Dispatching removeFromCart with id:', action.payload);
      console.log('Current state before removal:', state);
      const index = state.findIndex(item => item.id !== action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        console.log('No item found with id:', action.payload);
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
