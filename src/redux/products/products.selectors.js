import { createSelector } from "reselect";

const getProductsStore = (state) => state.products;

export const getProducts = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.products
);

export const getCartDropdownState = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.isCartDropdownOpen
);

export const getCartProducts = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.cartProducts
);
export const getCartProductsAmount = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.cartProductsAmount
);
export const getTotalProductsCost = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.totalProductsCost
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
