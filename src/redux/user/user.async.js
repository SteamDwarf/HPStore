import { setUser, setSignInError, setSignUpError } from "./user.slice";

export const signIn = (userData, fetchUserFunc, dispatch, successFunc) => {
    fetchUserFunc(userData).unwrap()
    .then(data => {
        
        if(data.length <= 0) return Promise.reject({status: 'Данный пользователь не найден'});
        if(data[0].password !== userData.password) return Promise.reject({status: 'Вы ввели некорректный пароль'});

        dispatch(setUser({...data[0], password: ''}));
        successFunc();
    })
    .catch(error => dispatch(setSignInError(error)))
}

export const signUp = (userData, fetchUserFunc, postUserFunc, dispatch, successFunc) => {
    fetchUserFunc(userData).unwrap()
    .then(data => {
        if(data.length > 0) return Promise.reject({status: 'Данный пользователь уже существует'});

        postUserFunc(userData);
        dispatch(setUser({...userData, password: ''}));
        successFunc();
    })
    .catch(error => dispatch(setSignUpError(error)))
}