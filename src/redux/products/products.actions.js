import { ProductsActions } from "./products.actions-types";

function incrementCartProductAmount(cartProducts, product) {
    const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
    let newCartProducts;

    if(existProduct) {
        newCartProducts = cartProducts.reduce((result, curProduct) => {
            if(product.id === curProduct.id)
                return [...result, {...curProduct, amount: curProduct.amount + 1}];
    
            return [...result, curProduct];
        }, []);
    } else {
        newCartProducts = [...cartProducts, {...product, amount: 1}];
    }
    
    return newCartProducts;
}
function decrementCartProductAmount(cartProducts, product) {
    const newCartProducts = cartProducts.reduce((result, curProduct) => {
        if(product.id === curProduct.id) {
            if(curProduct.amount - 1 > 0)
                return [...result, {...curProduct, amount: curProduct.amount - 1}]
            else 
                return [...result];
        }

        return [...result, curProduct];
    }, []);

    return newCartProducts;
}

function deleteProduct(cartProducts, product) {
    return cartProducts.filter((curProduct) => {
        return curProduct.id !== product.id;
    });
}

export const setProductsAction = (products) => ({type: ProductsActions.SET_PRODUCTS, payload: products});
export const toggleCartDropdownAction = () => ({type: ProductsActions.TOGGLE_CART_DROPDOWN});
const updateCartAction = (cartProducts, cartProductsAmount, totalProductsCost) => {
    return {type: ProductsActions.UPDATE_CART, 
            payload: {
                cartProducts,
                cartProductsAmount,
                totalProductsCost
            }
    }
};

export const incrementCartProductAction = (cartProps, product) => {
    const newCartProducts = incrementCartProductAmount(cartProps.cartProducts, product);
    const newCartProductsAmount = cartProps.cartProductsAmount + 1;
    const newTotalProductsCost = cartProps.totalProductsCost + product.price;
    
    return updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost);
}
export const decrementCartProductAction = (cartProps, product) => {
    const newCartProducts = decrementCartProductAmount(cartProps.cartProducts, product);
    const newCartProductsAmount = cartProps.cartProductsAmount - 1;
    const newTotalProductsCost = cartProps.totalProductsCost - product.price;
 
    return updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost);
}
export const deleteCartProductAction = (cartProps, product) => {
    const newCartProducts = deleteProduct(cartProps.cartProducts, product);
    const newCartProductsAmount = cartProps.cartProductsAmount - product.amount;
    const newTotalProductsCost = cartProps.totalProductsCost - product.price * product.amount;
 
    return updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost);
}

