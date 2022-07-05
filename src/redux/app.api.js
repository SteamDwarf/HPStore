import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        fetchNews: builder.query({
            query: () => 'news'
        }),
        fetchCategories: builder.query({
        query: () => `categories`,
        }),
        fetchCategory: builder.query({
            query: (categoryName) => `categories/${categoryName}`,
        }),
        fetchProducts: builder.query({
            query: (categoryName) => `categories/${categoryName}/goods`,
        }),
        fetchProduct: builder.query({
            query: (urlParams) => `categories/${urlParams.categoryName}/goods?name=${urlParams.productName}`,
        }),
        makePurchase: builder.mutation({
            query: ({user, cartProducts}) => ({
                url: `users?id=${user.id}/goods`,
                method: 'POST',
                body: cartProducts
            }),
        }),
        fetchUser: builder.query({
            query: (user) => `users?email=${user.email}`
        }),
        postUser: builder.mutation({
            query: (user) => ({
                url: `users`,
                method: 'POST',
                body: user
            })
        })
        /* signIn: builder.query({
            query: (user) => `users?email=${user.email}`,
            transformResponse: (responseData, meta, {user, successFunc}) => {
                console.log(responseData);
                console.log(meta);
                //Если есть в meta dispatch то можно в него отправить данные пользователя
                if(responseData.length < 1)
                    return {user: null, error: "Такого пользователя не существует"}
                if(responseData[0].password !== user.password)
                    return {user: null, error: "Неверный пароль"}
                
                successFunc({user: {...responseData[0], password: ''}, error: ''});
                return {user: {...responseData[0], password: ''}, error: ''}
            }
        }) */
    })
});

export const { useFetchNewsQuery, 
                useFetchCategoriesQuery, 
                useFetchCategoryQuery, 
                useFetchProductQuery,
                useFetchProductsQuery,
                useMakePurchaseMutation,
                useFetchUserQuery,
                useLazyFetchUserQuery,
                usePostUserMutation
            } = appApi;