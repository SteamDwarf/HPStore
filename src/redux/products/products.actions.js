import { parseError } from "../../utils/server/fetches/serverFetches";
import { ProductsActions } from "./products.actions-types";

export const fetchCategoriesStartAction = () => ({type: ProductsActions.FETCH_CATEGORIES_START});
export const fetchCategoriesErrorAction = (error) => ({type: ProductsActions.FETCH_CATEGORIES_ERROR, payload: error});
export const fetchCategoriesSuccessAction = (categories) => ({type: ProductsActions.FETCH_CATEGORIES_SUCCESS, payload: categories});

export const fetchProductStartAction = () => ({type: ProductsActions.FETCH_PRODUCT_START});
export const fetchProductErrorAction = (error) => ({type: ProductsActions.FETCH_PRODUCT_ERROR, payload: error});
export const fetchProductSuccessAction = (product) => ({type: ProductsActions.FETCH_PRODUCT_SUCCESS, payload: product});

export const fetchCategories = (category) => {
    return (dispatch) => {
        dispatch(fetchCategoriesStartAction());

        fetch(`http://localhost:5000/categories${category ? `?name=${category}` : ''}`)
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => dispatch(fetchCategoriesSuccessAction(data)))
            .catch(error => dispatch(fetchCategoriesErrorAction(parseError(error.message))));
    }
}

export const fetchProduct = (categoryName, productName) => {
    return (dispatch) => {
        dispatch(fetchProductStartAction());

        fetch(`http://localhost:5000/categories${categoryName ? `?name=${categoryName}` : ''}`)
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => {console.log(data[0].goods.filter((product) => product.name === productName)); return data[0].goods.filter((product) => product.name === productName)})
            .then(product => dispatch(fetchProductSuccessAction(product[0])))
            .catch(error => dispatch(fetchProductErrorAction(parseError(error.message))));
    }
}
