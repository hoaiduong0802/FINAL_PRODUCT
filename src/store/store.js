import { configureStore } from "@reduxjs/toolkit";
import { ENV } from "../constants/environments";
import authReducer from "./reducer/authReducer";
import cartReducer from "./reducer/cartReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer
  },
  // configureStore sử dụng redux-thunk như default middleware
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(thunkMiddleware),
  devTools: ENV === "development",
});


// store
//  reducers:
//   auth
//   cart
//   product
//   notification

export default store;
