import { ThemesActions } from "./themes.actions-types"

const defaultState = {
    theme: 'light'
}

export const themeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ThemesActions.SET_THEME:
            return {...state, theme: action.payload}
        default:
            return state;
    }
}