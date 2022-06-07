import { CartActions } from "./cart.actions-types";

const defaultState = {
    isCartDropdownOpen: false, 
    cartProducts: [],
    cartProductsAmount: 0,
    isConfirmationWait: false, 
    totalProductsCost: 0,
    isMakingPurchase: false,
    makePurchaseError: '',
    successMessage: ''
};

export const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CartActions.TOGGLE_CART_DROPDOWN:
            return {...state, isCartDropdownOpen: !state.isCartDropdownOpen};
        case CartActions.UPDATE_CART:
            return {...state, ...action.payload}
        case CartActions.CLEAR_CART:
            return {...state, cartProducts: [], cartProductsAmount: 0, totalProductsCost: 0, successMessage: ''}
        case CartActions.SET_CONFIRMATION_WAIT:
            return {...state, isConfirmationWait: action.payload}
        case CartActions.MAKE_PURCHASE_START:
            return {...state, isMakingPurchase: true, makePurchaseError: '', isConfirmationWait: false}
        case CartActions.MAKE_PURCHASE_ERROR:
            return {...state, isMakingPurchase: false, makePurchaseError: action.payload, isConfirmationWait: false}
        case CartActions.MAKE_PURCHASE_SUCCESS:
            return {...state, isMakingPurchase: false, makePurchaseError: '', successMessage: action.payload}
        default:
            return state;
    }
};
