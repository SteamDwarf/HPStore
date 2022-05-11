import { createContext, useEffect, useReducer } from "react"
import { fetchFromServer } from "../utils/server/fetches/serverFetches";
import { ProductsActions } from "../utils/types";

const defaultProductsValue = {
    products: [],
    isCartDropdownOpen: false,
    cartProducts: [],
    addProductToCart: () => [],
    cartProductsAmount: 0,
    totalProductsCost: 0
}

const setProductsAction = (products) => ({type: ProductsActions.SET_PRODUCTS, payload: products});
const toggleCartDropdownAction = () => ({type: ProductsActions.TOGGLE_CART_DROPDOWN});
const updateCartAction = (newCartProducts, newCartProductsAmount, newTotalProductsCost) => (
    {   type: ProductsActions.UPDATE_CART, 
        payload: {cartProducts: newCartProducts, cartProductsAmount: newCartProductsAmount, totalProductsCost: newTotalProductsCost}
    }
);

function increaseCartProductAmount(cartProducts, productId) {
    const newCartProducts = cartProducts.reduce((result, curProduct) => {
        if(productId === curProduct.id)
            return [...result, {...curProduct, amount: curProduct.amount + 1}];

        return [...result, curProduct];
    }, []);

    return newCartProducts;
}
function decreaseCartProductAmount(cartProducts, productId) {
    const newCartProducts = cartProducts.reduce((result, curProduct) => {
        if(productId === curProduct.id) {
            if(curProduct.amount - 1 > 0)
                return [...result, {...curProduct, amount: curProduct.amount - 1}]
            else 
                return [...result];
        }

        return [...result, curProduct];
    }, []);

    return newCartProducts;
}

function deleteProduct(cartProducts, productId) {
    return cartProducts.filter((curProduct) => {
        return curProduct.id !== productId;
    });
}

function ProductsReducer(state, action) {
    switch(action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ProductsActions.TOGGLE_CART_DROPDOWN:
            return {...state, isCartDropdownOpen: !state.isCartDropdownOpen};
        case ProductsActions.UPDATE_CART:
            return {...state, ...action.payload}
        default:
            throw new Error(`${action.type} incorrect value!`);
    }
}

export const ProductsContext = createContext(defaultProductsValue);

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, defaultProductsValue);
    const {products, isCartDropdownOpen, cartProducts, cartProductsAmount, totalProductsCost} = state;
    
    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProductsDispatch);
    }

    const setProductsDispatch = (products) => {
        dispatch(setProductsAction(products));
    } 

    const toggleCartDropdownDispatch = () => {
        dispatch(toggleCartDropdownAction());
    }

    const addProductToCartDispatch = (product) => {
        const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
        let newCartProducts;
        let newCartProductsAmount;
        let newTotalProductsCost;

        if(existProduct) {
            newCartProducts = increaseCartProductAmount(cartProducts, product.id);
        } else {
            newCartProducts = [...cartProducts, {...product, amount: 1}];
        }

        newCartProductsAmount = cartProductsAmount + 1;
        newTotalProductsCost = totalProductsCost + product.price;

        dispatch(updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost));
    }

    const increaseProductAmountDispatch = (product) => {
        const newCartProducts = increaseCartProductAmount(cartProducts, product.id);
        const newCartProductsAmount = cartProductsAmount + 1;
        const newTotalProductsCost = totalProductsCost + product.price;

        dispatch(updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost));
    }

    const decreaseProductAmountDispatch = (product) => {
        const newCartProducts = decreaseCartProductAmount(cartProducts, product.id);
        const newCartProductsAmount = cartProductsAmount - 1;
        const newTotalProductsCost = totalProductsCost - product.price;

        dispatch(updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost));
    }

    const deleteProductDispatch = (product) => {
        const newCartProducts = deleteProduct(cartProducts, product.id);
        const newCartProductsAmount = cartProductsAmount - product.amount;
        const newTotalProductsCost = totalProductsCost - product.price * product.amount;

        dispatch(updateCartAction(newCartProducts, newCartProductsAmount, newTotalProductsCost));
    }

    const value = {
        products, 
        isCartDropdownOpen, 
        cartProducts,
        cartProductsAmount, 
        totalProductsCost,
        addProductToCartDispatch, 
        increaseProductAmountDispatch,
        decreaseProductAmountDispatch,
        deleteProductDispatch,
        toggleCartDropdownDispatch
    };

    useEffect(fetchProducts, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};