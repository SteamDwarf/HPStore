import { parseError } from "../../utils/server/fetches/serverFetches";
import { UserActions } from "./user.actions-types";

export const setUserAction = (user) => ({type: UserActions.SET_USER, payload: user});

export const signOutAction = () => ({type: UserActions.SIGN_OUT});
export const clearForms = () => ({type: UserActions.CLEAR_FORMS})

export const signInStartAction = () => ({type: UserActions.SIGN_IN_START});
export const signInErrorAction = (error) => ({type: UserActions.SIGN_IN_ERROR, payload: error});
export const signInSuccessAction = (userData) => ({type: UserActions.SIGN_IN_SUCCESS, payload: userData});

export const signUpStartAction = () => ({type: UserActions.SIGN_UP_START});
export const signUpErrorAction = (error) => ({type: UserActions.SIGN_UP_ERROR, payload: error});
export const signUpSuccessAction = (userData) => ({type: UserActions.SIGN_UP_SUCCESS, payload: userData});

export const signIn = (email, password, successFunction) => {
    return (dispatch) => {
        dispatch(signInStartAction());

        fetch(`http://localhost:5000/users?email=${email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            if(data.length <= 0) {
                dispatch(signInErrorAction('Данный пользователь не найден'));
                return
            }

            if(data[0].password !== password) {
                dispatch(signInErrorAction('Вы ввели некорректный пароль'));
                return
            }

            dispatch(signInSuccessAction({...data[0], password: ''}));
            successFunction()
        })
        .catch((error) => dispatch(signInErrorAction(parseError(error.message))))
    }
}

export function signUp(email, password, successFunction) {
    return (dispatch) => {
        dispatch(signUpStartAction());

        fetch(`http://localhost:5000/users?email=${email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            if(data.length > 0) {
                dispatch(signUpErrorAction('Такой пользователь уже существует'));
                return
            }
            
            dispatch(postNewUser(email, password, successFunction));
        }) 
        .catch((error) => dispatch(signUpErrorAction(parseError(error.message))))
    }    
}

const postNewUser = (email, password, successFunction) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/users?email=${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id: Date.now(), email: email, password: password})
        })
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            dispatch(signUpSuccessAction({...data, password: ''}));
            successFunction();
        })
        .catch(error => dispatch(signUpErrorAction(parseError(error.message))))
    }
}