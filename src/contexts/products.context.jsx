import { createContext, useState, useEffect } from "react"
import { fetchFromServer } from "../utils/server/fetches/serverFetches";

const defaultProductsValue = {
    products: [],
}

export const ProductsContext = createContext(defaultProductsValue);

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProducts);
    }

    useEffect(fetchProducts, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};