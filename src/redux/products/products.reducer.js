import { ProductsActions } from "./products.actions-types";

const defaultState = {
    products: [], 
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
};