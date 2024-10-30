import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store; 
