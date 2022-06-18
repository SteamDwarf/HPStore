import { ThemesActions } from "./themes.actions-types"

const defaultState = {
    theme: 'light',
    isBurgerMenuOpen: false
}

export const themeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ThemesActions.SET_THEME:
            return {...state, theme: action.payload}
        case ThemesActions.TOGGLE_BURGER_MENU:
            return {...state, isBurgerMenuOpen: action.payload}
        default:
            return state;
    }
}