import { createSelector } from "reselect";

const getProductsStore = (state) => state.products;

export const getProducts = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.products
);
