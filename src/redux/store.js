import { applyMiddleware, compose, createStore } from "redux";
import { persistConfig, rootReducer } from "./root.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { composeWithDevTools } from "redux-devtools-extension";

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

const middlewares = [logger];
const composedEnchancers = composeWithDevTools(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnchancers);
export const persistor = persistStore(store);