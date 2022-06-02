import { ThemesActions } from "./themes.actions-types"

export const setThemeAction = (theme) => ({type: ThemesActions.SET_THEME, payload: theme});