import { parseError } from "../../utils/server/fetches/serverFetches";
import { CartActions } from "./cart.actions-types";

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

export const toggleCartDropdownAction = (isOpened) => ({type: CartActions.TOGGLE_CART_DROPDOWN, payload: isOpened});
const updateCartAction = (cartProducts, cartProductsAmount, totalProductsCost) => {
    return {type: CartActions.UPDATE_CART, 
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

export const clearCartAction = () => ({type: CartActions.CLEAR_CART});
export const setConfirmationWait = (isConfirmationWait) => ({type: CartActions.SET_CONFIRMATION_WAIT, payload: isConfirmationWait});

export const makePurchaseStartAction = () => ({type: CartActions.MAKE_PURCHASE_START});
export const makePurchaseErrorAction = (error) => ({type: CartActions.MAKE_PURCHASE_ERROR, payload: error});
export const makePurchaseSuccessAction = (successMessage) => ({type: CartActions.MAKE_PURCHASE_SUCCESS, payload: successMessage});

export const makePurchase = (user, cartProducts, successFunction) => {
    return (dispatch) => {
        dispatch(makePurchaseStartAction());

        fetch(`http://localhost:5000/users?id=${user.id}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            dispatch(makePurchaseSuccessAction("Покупка совершена успешно."));
            setTimeout(() => {
                dispatch(clearCartAction());
                successFunction();
            }, 2000);
        })
        .catch(error => dispatch(makePurchaseErrorAction(parseError(error.message))))
    }
}