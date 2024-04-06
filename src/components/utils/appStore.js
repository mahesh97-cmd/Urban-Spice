import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authSlice from "./authSlice";

const appStore=configureStore({
     reducer: {
        cart:cartReducer ,
        auth:authSlice,
     },
});
export default appStore;