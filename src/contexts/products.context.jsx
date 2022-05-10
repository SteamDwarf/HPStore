import { createContext, useState, useEffect, useReducer } from "react"
import { fetchFromServer } from "../utils/server/fetches/serverFetches";
import { DECREMENTING_ITEM, INCREMENTING_ITEM, ProductsActions } from "../utils/types";

const defaultProductsValue = {
    products: [],
    isCartDropdownOpen: false,
    cartProducts: [],
    addProductToCart: () => [],
    cartProductsAmount: 0
}

export const ProductsContext = createContext(defaultProductsValue);

export const setProductsAction = (products) => ({type: ProductsActions.SET_PRODUCTS, payload: products});
export const toggleCartDropdownAction = () => ({type: ProductsActions.TOGGLE_CART_DROPDOWN});
export const addProductToCartAction = (product) => ({type: ProductsActions.ADD_PRODUCT_TO_CART, payload: product});
export const increaseCartProductAmountAction = (productId) => ({type: ProductsActions.INCREASE_CART_PRODUCT_AMOUNT, payload: productId});
export const decreaseCartProductAmountAction = (productId) => ({type: ProductsActions.DECREASE_CART_PRODUCT_AMOUNT, payload: productId});
export const deleteProductAction = (product) => ({type: ProductsActions.DELETE_PRODUCT_FROM_CART, payload: product});

const increaseCartProductAmount = (cartProducts, productId) => {
    const newCartProducts = cartProducts.reduce((result, curProduct) => {
        if(productId === curProduct.id)
            return [...result, {...curProduct, amount: curProduct.amount + 1}];

        return [...result, curProduct];
    }, []);

    return newCartProducts;
}
const decreaseCartProductAmount = (cartProducts, productId) => {
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

function countProductsAmount(cartProductsAmount, productAmount) {
    return cartProductsAmount - productAmount;
}

function ProductsReducer(state, action) {
    switch(action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ProductsActions.TOGGLE_CART_DROPDOWN:
            return {...state, isCartDropdownOpen: !state.isCartDropdownOpen};
        case ProductsActions.ADD_PRODUCT_TO_CART:
            return {...state, 
                        cartProducts: [...state.cartProducts, {...action.payload, amount: 1}], 
                        cartProductsAmount: state.cartProductsAmount + 1
                    };
        case ProductsActions.INCREASE_CART_PRODUCT_AMOUNT:
            return {...state, 
                        cartProducts: increaseCartProductAmount(state.cartProducts, action.payload), 
                        cartProductsAmount: state.cartProductsAmount + 1
                    };
        case ProductsActions.DECREASE_CART_PRODUCT_AMOUNT: 
            return {...state, 
                        cartProducts: decreaseCartProductAmount(state.cartProducts, action.payload),
                        cartProductsAmount: state.cartProductsAmount - 1
                    };
        case ProductsActions.DELETE_PRODUCT_FROM_CART:
            return {...state,
                        cartProducts: deleteProduct(state.cartProducts, action.payload.id),
                        cartProductsAmount: countProductsAmount(state.cartProductsAmount, action.payload.amount)
                    };
    }
}

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, defaultProductsValue);
    const {products, isCartDropdownOpen, cartProducts, cartProductsAmount} = state;
    
    /* const [products, setProducts] = useState([]);
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsAmount, setCartProductsAmount] = useState(0); */

    const setProductsDispatch = (products) => {
        dispatch(setProductsAction(products));
    } 

    const toggleCartDropdownDispatch = () => {
        dispatch(toggleCartDropdownAction());
    }

    const addProductToCartDispatch = (product) => {
        const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
        if(existProduct) {
            dispatch(increaseCartProductAmountAction(product.id));
        } else {
            dispatch(addProductToCartAction(product));
        }
    }

    const increaseProductAmountDispatch = (productId) => {
        dispatch(increaseCartProductAmountAction(productId));
    }

    const decreaseProductAmountDispatch = (productId) => {
        dispatch(decreaseCartProductAmountAction(productId));
    }

    const deleteProductDispatch = (productId) => {
        dispatch(deleteProductAction(productId));
    }
    

    const value = {
        products, 
        isCartDropdownOpen, 
        //setCartDropdownOpen, 
        cartProducts, 
        addProductToCartDispatch, 
        cartProductsAmount,
        increaseProductAmountDispatch,
        decreaseProductAmountDispatch,
        deleteProductDispatch,
        /* changeCartProductAmount,
        deleteProduct */
        toggleCartDropdownDispatch
    };

    /* const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProducts);
    } */

    

    
    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProductsDispatch);
    }

    /* function addProductToCart(product) {
        const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
        if(existProduct) {
            changeCartProductAmount(existProduct.id, INCREMENTING_ITEM);
        } else {
            setCartProducts([...cartProducts, {...product, amount: 1}]);
        }
    } */

    /* function changeCartProductAmount(productId, typeChanging) {
        setCartProducts(cartProducts.reduce((result, curProduct) => {
            if(productId === curProduct.id) {
                if(typeChanging === INCREMENTING_ITEM)
                    return [...result, {...curProduct, amount: curProduct.amount + 1}]
                else if(typeChanging === DECREMENTING_ITEM)
                    if(curProduct.amount - 1 > 0)
                        return [...result, {...curProduct, amount: curProduct.amount - 1}]
                    else 
                        return [...result];
            }

            return [...result, curProduct];
        }, []));
    } */

    /* function deleteProduct(product) {
        setCartProducts(cartProducts.filter((curProduct) => {
            return curProduct.id !== product.id;
        }));
    } */

    /* function countProductsAmount() {
        setCartProductsAmount(cartProducts.reduce((sum, curProduct) => sum + curProduct.amount , 0));
    } */

    useEffect(fetchProducts, []);
    //useEffect(countProductsAmount, [cartProducts]);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};