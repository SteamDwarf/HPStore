import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api/app.api";

export interface ICartProduct extends IProduct {
    amount: number;
}

interface ICartState {
    isCartDropdownOpen: boolean;
    cartProducts: ICartProduct[];
    cartProductsAmount: number;
    isConfirmationWait: boolean;
    totalProductsCost: number;
    error: string;
}

const initialState: ICartState = {
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
        toggleCartDropdown(state: ICartState, action: PayloadAction<boolean>) {
            state.isCartDropdownOpen = action.payload;
        },
        incrementProductAmount(state: ICartState, action: PayloadAction<IProduct>) {
            const existProduct = state.cartProducts.find(curProduct => curProduct.id === action.payload.id);
            let newCartProducts;

            if(existProduct) {
                newCartProducts = state.cartProducts.map((curProduct) => {
                    if(action.payload.id === curProduct.id) return {...curProduct, amount: curProduct.amount + 1}

                    return curProduct;
                });
                
            } else {
                newCartProducts = [...state.cartProducts, {...action.payload, amount: 1}];
            }

            state.cartProducts = newCartProducts;
            state.cartProductsAmount++;
            state.totalProductsCost += action.payload.price;
        },
        decrementProductAmount(state: ICartState, action: PayloadAction<IProduct>) {
            const newCartProducts = state.cartProducts.reduce((result, curProduct) => {
                if(action.payload.id === curProduct.id) {
                    if(curProduct.amount > 1)
                        return [...result, {...curProduct, amount: curProduct.amount - 1}]
                    else 
                        return [...result];
                }
        
                return [...result, curProduct];
            }, [] as ICartProduct[]);
        
            state.cartProducts = newCartProducts;
            state.cartProductsAmount--;
            state.totalProductsCost -= action.payload.price;
        },
        deleteProduct(state: ICartState, action: PayloadAction<ICartProduct>) {
            state.cartProducts = state.cartProducts.filter((curProduct) => {
                return curProduct.id !== action.payload.id;
            });
            state.cartProductsAmount -= action.payload.amount;
            state.totalProductsCost -= action.payload.price * action.payload.amount;
        },
        clearCart(state: ICartState) {
            state.cartProducts = [];
            state.cartProductsAmount = 0;
            state.totalProductsCost = 0;
        },
        setConfirmationWait(state: ICartState, action: PayloadAction<boolean>) {
            state.isConfirmationWait = action.payload;
        },
        setPurchaseError(state: ICartState, action: PayloadAction<string>) {
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