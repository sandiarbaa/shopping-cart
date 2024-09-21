import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
}

interface CartState {
  cartItems: CartItem[];
}

const getInitialCartItems = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  try {
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.log("Failed to parse cart items from localStorage", error);
  }
  return [];
};

const initialState: CartState = {
  cartItems: getInitialCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload; // akan berisi items, kecuali produk yg di klik
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
