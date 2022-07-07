import { setUser, setSignInError, setSignUpError, signInUser } from "./user.slice";

export const signUp = (userData, signUpFunc, signInFunc, dispatch, successFunc) => {
    signUpFunc(userData).unwrap()
    .then(data => {
        signIn(userData, signInFunc, dispatch, successFunc);
    })
    .catch(data => {
        console.error(data);
        dispatch(setSignUpError(data))
    });
}

export const signIn = (userData, signInFunc, dispatch, successFunc) => {
    signInFunc(userData).unwrap()
    .then(data => {
        dispatch(signInUser(data));
        successFunc();
    })
    .catch(data => {
        console.error(data);
        dispatch(setSignInError(data))
    });
}

export const authorization = (authorizationFunc, dispatch) => {
    authorizationFunc().unwrap()
    .then(user => dispatch(setUser(user)))
    .catch(error => console.error(error));
}