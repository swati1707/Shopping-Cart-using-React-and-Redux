import { combineReducers } from "redux";
import productReducers from "./productReducer";
import cartReducers from "./cartReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
});