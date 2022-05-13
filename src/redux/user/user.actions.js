import { UserActions } from "./user.actions-types";

export const setUserAction = (user) => ({type: UserActions.SET_USER, payload: user});