import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.PUBLIC_URL}/db/`}),
    endpoints: (builder) => ({
        fetchNews: builder.query({
            query: () => 'news.json',
            transformResponse: data => {
                return data.news;
            }
        }),
        fetchCategories: builder.query({
            query: () => 'categories.json',
            transformResponse: data => {
                return data.categories;
            }
        }),
        fetchCategory: builder.query({
            query: () => `categories.json`,
            transformResponse: (data, responses, categoryName) => {
                return data.categories.find(category => category.name === categoryName);
            }
        }),
        fetchProducts: builder.query({
            query: () => `products.json`,
            transformResponse: (data, responses, categoryName) => {
                return data.products.filter(product => product.categoryId === categoryName);
            }
        })
    })
});

export const { useFetchNewsQuery, 
                useFetchCategoriesQuery, 
                useFetchCategoryQuery, 
                useFetchProductQuery,
                useFetchProductsQuery,
            } = appApi;