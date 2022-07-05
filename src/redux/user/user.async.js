/* import { createAsyncThunk } from "@reduxjs/toolkit"

export const signIn = createAsyncThunk(
    'user/signIn',
    async (userData, thunkAPI) => {
        fetch(`http://localhost:5000/userds?email=${userData.email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            console.log(data)
            if(data.length <= 0) return Promise.reject('Данный пользователь не найден');
            if(data[0].password !== userData.password) return Promise.reject('Вы ввели некорректный пароль');

            return {...data[0], password: ''};
        })
        .catch(error => thunkAPI.rejectWithValue(error));
    }
) */

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