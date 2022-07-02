import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'light',
    isBurgerMenuOpen: false
}

export const themesSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        },
        toggleBurgerMenu(state, action) {
            state.isBurgerMenuOpen = action.payload
        }
    }
});

export const { setTheme, toggleBurgerMenu } = themesSlice.actions;
export default themesSlice.reducer;