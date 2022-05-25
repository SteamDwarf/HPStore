import { combineReducers } from "redux";
import { productsReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const cartPersistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartProducts', 'cartProductsAmount', 'totalProductsCost']
}

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer)
});
