import { CartActions } from "./cart.actions-types";

const defaultState = {
    isCartDropdownOpen: false, 
    cartProducts: [],
    cartProductsAmount: 0, 
    totalProductsCost: 0,
};

export const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CartActions.TOGGLE_CART_DROPDOWN:
            return {...state, isCartDropdownOpen: !state.isCartDropdownOpen};
        case CartActions.UPDATE_CART:
            return {...state, ...action.payload}
        default:
            return state;
    }
};
