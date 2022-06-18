import { createSelector } from "reselect";

const getProductsStore = (state) => state.products;

export const getCategories = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.categories
);
export const getIsFetchingCategories = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.isFetchingCategories
);
export const getErrorCategories = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.errorCategories
);

export const getProduct = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.product
);
export const getIsFetchingProduct = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.isFetchingProduct
);
export const getErrorProduct = createSelector(
    [getProductsStore],
    (productsStore) => productsStore.errorProduct
);
