import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cart";
import userReducer  from "./reducers/user";
import favoritesReducer from "./reducers/favorites";
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