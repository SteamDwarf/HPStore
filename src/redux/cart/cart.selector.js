import { createSelector } from "reselect";

const getCartStore = (state) => state.cart;

export const getCartDropdownState = createSelector(
    [getCartStore],
    (cartStore) => cartStore.isCartDropdownOpen
);

export const getCartProducts = createSelector(
    [getCartStore],
    (cartStore) => cartStore.cartProducts
);
export const getCartProductsAmount = createSelector(
    [getCartStore],
    (cartStore) => cartStore.cartProductsAmount
);
export const getTotalProductsCost = createSelector(
    [getCartStore],
    (cartStore) => cartStore.totalProductsCost
);
export const getCartProps = createSelector(
    [getCartProducts, getCartProductsAmount, getTotalProductsCost],
    (cartProducts, cartProductsAmount, totalProductsCost) => {
        return {
            cartProducts,
            cartProductsAmount,
            totalProductsCost
        }
    }
);

export const getConfirmationWait = createSelector(
    [getCartStore],
    (cartStore) => cartStore.isConfirmationWait
);

export const getIsMakingPurchase = createSelector(
    [getCartStore],
    (cartStore) => cartStore.isMakingPurchase
);

export const getMakePurchaseError = createSelector(
    [getCartStore],
    (cartStore) => cartStore.makePurchaseError
);

export const getSuccessMessage = createSelector(
    [getCartStore],
    (cartStore) => cartStore.successMessage
);