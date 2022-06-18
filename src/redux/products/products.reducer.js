import { ProductsActions } from "./products.actions-types";

const productDefault = {
    id: '',
    name: '',
    title: '',
    imageSrc: ''
}

const defaultState = {
    categories: [],
    isFetchingCategories: false,
    errorCategories: '',
    
    product: productDefault,
    isFetchingProduct: false,
    errorProduct: ''
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ProductsActions.FETCH_CATEGORIES_START:
            return {...state, isFetchingCategories: true, errorCategories: '', categories: []}
        case ProductsActions.FETCH_CATEGORIES_ERROR:
            return {...state, isFetchingCategories: false, errorCategories: action.payload}
        case ProductsActions.FETCH_CATEGORIES_SUCCESS:
            return {...state, isFetchingCategories: false, categories: action.payload}
        case ProductsActions.FETCH_PRODUCT_START:
            return {...state, isFetchingProduct: true, errorProduct: '', product: productDefault}
        case ProductsActions.FETCH_PRODUCT_ERROR:
            return {...state, isFetchingProduct: false, errorProduct: action.payload}
        case ProductsActions.FETCH_PRODUCT_SUCCESS:
            return {...state, isFetchingProduct: false, product: action.payload}
        default:
            return state;
    }
};