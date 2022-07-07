import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://nestjs-boilerplate-test.herokuapp.com/api',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().user.token;

            if(token)
                headers.set('authorization', `Bearer ${token}`);
            
            return headers;
        }
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (userData) => ({
                url: 'v1/auth/email/register',
                method: 'POST',
                body: userData
            })
        }),
        login: builder.mutation({
            query: (userData) => ({
                url: 'v1/auth/email/login',
                method: 'POST',
                body: userData
            })
        }),
        auth: builder.query({
            query: () => 'v1/auth/me'
        })
    })
});

export const {useLoginMutation, useLazyAuthQuery, useSignUpMutation} = authApi;