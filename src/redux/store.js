import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./cart/CartReducer";
import userReducer  from "./user/UserReducer";
import favoritesReducer from "./favorites/FavoritesReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favorites: favoritesReducer
})

const middleWare = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middleWare));


export default store;