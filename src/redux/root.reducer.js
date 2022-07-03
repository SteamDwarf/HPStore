import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import themeReducer from './themes/themes.slice';
import { appApi } from "./app.api";

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
    cart: persistReducer(cartPersistConfig, cartReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    [appApi.reducerPath]: appApi.reducer,
});
