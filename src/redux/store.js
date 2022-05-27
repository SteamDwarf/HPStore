import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";
import persistStore from "redux-persist/es/persistStore";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

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

const middlewares = [logger, thunk];
const composedEnchancers = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnchancers);
export const persistor = persistStore(store);