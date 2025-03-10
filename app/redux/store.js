"use client";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import loadingReducer from "./slices/loadingSlice";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
