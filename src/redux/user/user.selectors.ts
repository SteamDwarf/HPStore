import { createSelector } from "reselect";
import { StoreState } from "../store";

export const getUserStore = (state: StoreState) => state.user;

export const getUser = createSelector(
    [getUserStore],
    (userStore) => userStore.user
);

export const getAuthError = createSelector(
    [getUserStore],
    (userStore) => userStore.error
);
