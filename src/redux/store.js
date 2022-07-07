import { rootReducer } from "./root.reducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./api/app.api";
import { authApi } from "./api/auth.api";

const middlewares = [appApi.middleware, authApi.middleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production'
});
export const persistor = persistStore(store);