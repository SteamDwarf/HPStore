export const NEWS_ITEM = 'NEWS_ITEM'; 
export const CATEGORY_ITEM = 'CATEGORY_ITEM'; 
export const PRODUCT_ITEM = 'PRODUCT_ITEM';

export const INCREMENTING_ITEM = 'INCREMENTING_ITEM';
export const DECREMENTING_ITEM = 'DECREMENTING_ITEM';

export const DEFAULT_CATEGORY_DATA = {
    id: "",
    title: "Товары из магазина 'Сладкое королевство'",
    imageSrc: "https://pbs.twimg.com/media/D4wITbeX4AAMF-2.jpg",
    goods: []
}

export const ProductsActions = {
    SET_PRODUCTS: "SET_PRODUCTS",
    TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
    ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
    INCREASE_CART_PRODUCT_AMOUNT: "INCREASE_CART_PRODUCT_AMOUNT",
    DECREASE_CART_PRODUCT_AMOUNT: "DECREASE_CART_PRODUCT_AMOUNT",
    DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
}