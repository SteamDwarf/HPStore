import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IThemeState {
    theme: string;
    isBurgerMenuOpen: boolean;
}

const initialState: IThemeState = {
    theme: 'light',
    isBurgerMenuOpen: false
}

export const themesSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setTheme(state: IThemeState, action: PayloadAction<string>) {
            state.theme = action.payload
        },
        toggleBurgerMenu(state: IThemeState, action: PayloadAction<boolean>) {
            state.isBurgerMenuOpen = action.payload
        }
    }
});

export const { setTheme, toggleBurgerMenu } = themesSlice.actions;
export default themesSlice.reducer;