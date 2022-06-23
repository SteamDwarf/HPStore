import { combineReducers } from "redux";
import { productsReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import newsReducer from "./news/news.reducer";
import { themeReducer } from "./themes/themes.reducer";

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['user']
}

const cartPersistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartProducts', 'cartProductsAmount', 'totalProductsCost']
}

const themePersistConfig = {
    key: 'theme',
    storage,
    whitelist: ['theme']
}

export const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    news: newsReducer,
    theme: persistReducer(themePersistConfig, themeReducer)
});
