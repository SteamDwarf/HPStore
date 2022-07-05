import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUser = createSelector(
    [getUserStore],
    (userStore) => userStore.user
);

export const getSignInError = createSelector (
    [getUserStore],
    (userStore) => userStore.signInError
)

export const getSignUpError = createSelector (
    [getUserStore],
    (userStore) => userStore.signUpError
)
