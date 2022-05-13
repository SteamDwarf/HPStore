export const getProducts = (state => state.products.products);
export const getCartDropdownState = (state => state.products.isCartDropdownOpen);
export const getCartProps = (state => ({
    cartProducts: state.products.cartProducts,
    cartProductsAmount: state.products.cartProductsAmount,
    totalProductsCost: state.products.totalProductsCost
}));