import { ProductsActions } from "./products.actions-types";

const defaultState = {
    categories: [],
    isFetching: false,
    error: '', 
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ProductsActions.FETCH_CATEGORIES_START:
            return {...state, isFetching: true, error: '', categories: []}
        case ProductsActions.FETCH_CATEGORIES_ERROR:
            return {...state, isFetching: false, error: action.payload}
        case ProductsActions.FETCH_CATEGORIES_SUCCESS:
            return {...state, isFetching: false, categories: action.payload}
        default:
            return state;
    }
};