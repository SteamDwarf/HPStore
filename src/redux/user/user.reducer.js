import { UserActions } from "./user.actions-types";

const defaultState = {
    user: null,
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case UserActions.SET_USER:
            return {...state, user: action.payload}
        default: 
            return state;
    }
};