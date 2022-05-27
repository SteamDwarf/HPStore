import { ProductsActions } from "./products.actions-types";

export const fetchCategoriesStartAction = () => ({type: ProductsActions.FETCH_CATEGORIES_START});
export const fetchCategoriesErrorAction = (error) => ({type: ProductsActions.FETCH_CATEGORIES_ERROR, payload: error});
export const fetchCategoriesSuccessAction = (categories) => ({type: ProductsActions.FETCH_CATEGORIES_SUCCESS, payload: categories});

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesStartAction());

        fetch('http://localhost:5000/categories')
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => dispatch(fetchCategoriesSuccessAction(data)))
            .catch(error => dispatch(fetchCategoriesErrorAction('ОШИБКА СЕРВЕРА')));
    }
}

