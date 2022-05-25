import { ProductsActions } from "./products.actions-types";

export const setProductsAction = (products) => ({type: ProductsActions.SET_PRODUCTS, payload: products});


