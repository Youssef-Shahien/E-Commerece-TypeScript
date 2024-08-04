import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors";
interface ICartState {
  items: { [keys: number]: number }; //number:number ==> 1:2
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});


export {getCartTotalQuantitySelector}
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
