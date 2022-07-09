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