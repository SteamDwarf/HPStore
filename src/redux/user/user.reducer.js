import { UserActions } from "./user.actions-types";

const defaultState = {
    user: null,

    signInError: '',
    signInProcessing: false,

    signUpError: '',
    signUpProcessing: false
}

//TODO При переходе на другую страницу сообщения должны у формы стираться

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case UserActions.SIGN_OUT:
            return {...state, user: null}
        case UserActions.SIGN_IN_START:
            return {...state, signInError: '', signInProcessing: true}
        case UserActions.SIGN_IN_ERROR:
            return {...state, signInError: action.payload, signInProcessing: false}
        case UserActions.SIGN_IN_SUCCESS:
            return {...state, signInProcessing: false, user: action.payload}

        case UserActions.SIGN_UP_START:
            return {...state, signUpError: '', signUpProcessing: true}
        case UserActions.SIGN_UP_ERROR:
            return {...state, signUpError: action.payload, signUpProcessing: false}
        case UserActions.SIGN_UP_SUCCESS:
            return {...state, signUpProcessing: false, user: action.payload}
        default: 
            return state;
    }
};