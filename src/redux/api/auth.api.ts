import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { StoreState } from "../store";
import { IUser } from "../user/user.slice";

export interface ISignInData {
    email: string;
    password: string;
}

export interface ISignUpData {
    email: string;
    password: string;
    repeatedPassword: string;
    firstName: string;
    lastName: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://nestjs-boilerplate-test.herokuapp.com/api',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as StoreState).user.token;

            if(token)
                headers.set('authorization', `Bearer ${token}`);
            
            return headers;
        }
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation<void, ISignUpData>({
            query: (userData) => ({
                url: 'v1/auth/email/register',
                method: 'POST',
                body: userData
            })
        }),
        signIn: builder.mutation<{token: string, user: IUser}, ISignInData>({
            query: (userData) => ({
                url: 'v1/auth/email/login',
                method: 'POST',
                body: userData
            })
        }),
        auth: builder.query<IUser, void>({
            query: () => 'v1/auth/me'
        })
    })
});

export const {useSignInMutation, useLazyAuthQuery, useSignUpMutation} = authApi;