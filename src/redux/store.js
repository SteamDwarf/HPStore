import { rootReducer } from "./root.reducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./app.api";

const logger = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log({
        actionType: action.type,
        actionPayload: action.payload,
        prevState: store.getState()
    });

    next(action);

    console.log('curState: ', store.getState());
}

const middlewares = [/* logger,  */appApi.middleware];

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