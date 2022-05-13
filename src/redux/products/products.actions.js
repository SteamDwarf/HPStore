import { ProductsActions } from "./products.actions-types";

export const setProductsAction = (products) => ({type: ProductsActions.SET_PRODUCTS, payload: products});
export const toggleCartDropdownAction = () => ({type: ProductsActions.TOGGLE_CART_DROPDOWN});
export const updateCartAction = ({newCartProducts, newCartProductsAmount, newTotalProductsCost}) => (
    {   type: ProductsActions.UPDATE_CART, 
        payload: {cartProducts: newCartProducts, cartProductsAmount: newCartProductsAmount, totalProductsCost: newTotalProductsCost}
    }
);

