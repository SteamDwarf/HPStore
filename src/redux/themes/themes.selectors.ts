import { createSelector } from "reselect";
import { StoreState } from "../store";

const getThemeStore = (state: StoreState) => state.theme;

export const getTheme = createSelector(
    [getThemeStore],
    (themeStore) => themeStore.theme
);

export const getBurgerMenuState = createSelector(
    [getThemeStore],
    (themeStore) => themeStore.isBurgerMenuOpen
);