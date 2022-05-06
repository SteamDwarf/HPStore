import { createContext, useState, useEffect } from "react"
import { fetchFromServer } from "../utils/server/fetches/serverFetches";
import { DECREMENTING_ITEM, INCREMENTING_ITEM } from "../utils/types";

const defaultProductsValue = {
    products: [],
    isCartDropdownOpen: false,
    cartProducts: [],
    addProductToCart: () => [],
    cartProductsAmount: 0
}

export const ProductsContext = createContext(defaultProductsValue);

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsAmount, setCartProductsAmount] = useState(0);

    const value = {
        products, 
        isCartDropdownOpen, 
        setCartDropdownOpen, 
        cartProducts, 
        addProductToCart, 
        cartProductsAmount,
        changeCartProductAmount,
        deleteProduct
    };

    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProducts);
    }

    function addProductToCart(product) {
        const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
        if(existProduct) {
            changeCartProductAmount(existProduct.id, INCREMENTING_ITEM);
            //incrementCartProductAmount(existProduct.id);
        } else {
            setCartProducts([...cartProducts, {...product, amount: 1}]);
        }
    }

    function changeCartProductAmount(productId, typeChanging) {
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
        /* setCartProducts(cartProducts.map(curProduct => {
            if(productId === curProduct.id) {
                if(typeChanging === INCREMENTING_ITEM)
                    return {...curProduct, amount: curProduct.amount + 1}
                else if(typeChanging === DECREMENTING_ITEM)
                    if(curProduct.amount - 1 > 0)
                        return {...curProduct, amount: curProduct.amount - 1}
            }

            return curProduct;
        })); */
    }

    /* function incrementCartProductAmount(productId) {
        setCartProducts(cartProducts.map(curProduct => {
            return (
                productId === curProduct.id
                ? {...curProduct, amount: curProduct.amount + 1}
                : curProduct  
            );
         }));
    }

    function decrementCartProductAmount(productId) {
        setCartProducts(cartProducts.map(curProduct => {
            return (
                productId === curProduct.id
                ? {...curProduct, amount: curProduct.amount - 1}
                : curProduct  
            );
         }));
    } */

    function deleteProduct(product) {
        setCartProducts(cartProducts.filter((curProduct) => {
            return curProduct.id !== product.id;
        }));
    }

    function countProductsAmount() {
        setCartProductsAmount(cartProducts.reduce((sum, curProduct) => sum + curProduct.amount , 0));
    }

    useEffect(fetchProducts, []);
    useEffect(countProductsAmount, [cartProducts]);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};