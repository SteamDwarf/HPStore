import { ThemesActions } from "./themes.actions-types"

export const setThemeAction = (theme) => ({type: ThemesActions.SET_THEME, payload: theme});
export const toggleBurgerMenuAction = (isOpened) => ({type: ThemesActions.TOGGLE_BURGER_MENU, payload: isOpened});