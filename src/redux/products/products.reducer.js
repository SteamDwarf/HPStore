import { ProductsActions } from "./products.actions-types";

const defaultState = {
    products: [], 
    isCartDropdownOpen: false, 
    cartProducts: [],
    cartProductsAmount: 0, 
    totalProductsCost: 0,
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ProductsActions.TOGGLE_CART_DROPDOWN:
            return {...state, isCartDropdownOpen: !state.isCartDropdownOpen};
        case ProductsActions.UPDATE_CART:
            return {...state, ...action.payload}
        default:
            return state;
    }
};