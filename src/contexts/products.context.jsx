import { createContext, useState, useEffect } from "react"
import { fetchFromServer } from "../utils/server/fetches/serverFetches";

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
        cartProductsAmount
    };

    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProducts);
    }

    function addProductToCart(product) {
        const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
        if(existProduct) {
            setCartProducts(cartProducts.map(curProduct => {
               return (
                existProduct.id === curProduct.id
                ? {...curProduct, amount: curProduct.amount + 1}
                : curProduct  
               );
            }));
        } else {
            setCartProducts([...cartProducts, {...product, amount: 1}]);
        }
    }

    function countProductsAmount() {
        setCartProductsAmount(cartProducts.reduce((sum, curProduct) => sum + curProduct.amount, 0));
    }

    useEffect(fetchProducts, []);
    useEffect(countProductsAmount, [cartProducts]);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};