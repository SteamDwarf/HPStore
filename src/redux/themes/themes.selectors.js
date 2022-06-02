import { createSelector } from "reselect";

const getThemeStore = (state) => state.theme;

export const getTheme = createSelector(
    [getThemeStore],
    (themeStore) => themeStore.theme
);