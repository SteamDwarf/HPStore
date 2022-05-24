import { combineReducers } from "redux";
import { productsReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const productsPersistConfig = {
    key: 'products',
    storage,
    whitelist: ['cartProducts', 'cartProductsAmount', 'totalProductsCost']
}

export const rootReducer = combineReducers({
    user: userReducer,
    products: persistReducer(productsPersistConfig, productsReducer)
});


//const persistedReducer = persistReducer(persistConfig, rootReducer);