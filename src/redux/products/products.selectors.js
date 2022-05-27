import { createSelector } from "reselect";

const getProductsStore = (state) => state.products;

export const getCategories = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.categories
);
export const getIsFetching = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.isFetching
);
export const getError = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.error
);
