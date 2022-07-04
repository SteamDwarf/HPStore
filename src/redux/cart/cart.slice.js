import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartDropdownOpen: false, 
    cartProducts: [],
    cartProductsAmount: 0,
    isConfirmationWait: false, 
    totalProductsCost: 0,
    error: '',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartDropdown(state, action) {
            state.isCartDropdownOpen = action.payload;
        },
        incrementProductAmount(state, action) {
            const existProduct = state.cartProducts.find(curProduct => curProduct.id === action.payload.id);
            let newCartProducts;

            if(existProduct) {
                newCartProducts = state.cartProducts.reduce((result, curProduct) => {
                    if(action.payload.id === curProduct.id)
                        return [...result, {...curProduct, amount: curProduct.amount + 1}];
            
                    return [...result, curProduct];
                }, []);
            } else {
                newCartProducts = [...state.cartProducts, {...action.payload, amount: 1}];
            }
            
            state.cartProducts = newCartProducts;
            state.cartProductsAmount++;
            state.totalProductsCost += action.payload.price;
        },
        decrementProductAmount(state, action) {
            const newCartProducts = state.cartProducts.reduce((result, curProduct) => {
                if(action.payload.id === curProduct.id) {
                    if(curProduct.amount - 1 > 0)
                        return [...result, {...curProduct, amount: curProduct.amount - 1}]
                    else 
                        return [...result];
                }
        
                return [...result, curProduct];
            }, []);
        
            state.cartProducts = newCartProducts;
            state.cartProductsAmount--;
            state.totalProductsCost -= action.payload.price;
        },
        deleteProduct(state, action) {
            state.cartProducts = state.cartProducts.filter((curProduct) => {
                return curProduct.id !== action.payload.id;
            });
            state.cartProductsAmount -= action.payload.amount;
            state.totalProductsCost -= action.payload.price * action.payload.amount;
        },
        clearCart(state) {
            state.cartProducts = [];
            state.cartProductsAmount = 0;
            state.totalProductsCost = 0;
        },
        setConfirmationWait(state, action) {
            state.isConfirmationWait = action.payload;
        },
        setPurchaseError(state, action) {
            state.error = action.payload;
        }
    }
})

export const {toggleCartDropdown, 
                incrementProductAmount, 
                decrementProductAmount, 
                deleteProduct, 
                clearCart,
                setConfirmationWait,
                setPurchaseError
            } = cartSlice.actions;
export default cartSlice.reducer;