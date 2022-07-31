import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface INews {
    id: number;
    date: string;
    title: string;
    description: string;
    imageSrc: string;
}

export interface ICategory {
    id: string;
    name: string;
    title: string;
    imageSrc: string;
}

export interface IProduct {
    id: number;
    categoryId: string;
    name: string;
    title: string;
    description: string;
    price: number;
    imageSrc: string;
}

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.PUBLIC_URL}/db/`}),
    endpoints: (builder) => ({
        fetchNews: builder.query<INews[], void>({
            query: () => 'news.json',
            transformResponse: (data: {news: INews[]}) => {
                return data.news;
            }
        }),
        fetchCategories: builder.query<ICategory[], void>({
            query: () => 'categories.json',
            transformResponse: (data: {categories: ICategory[]}) => {
                return data.categories;
            }
        }),
        fetchCategory: builder.query<ICategory | undefined, string>({
            query: () => `categories.json`,
            transformResponse: (data: {categories: ICategory[]}, responses, categoryName) => {
                return data.categories.find(category => category.name === categoryName);
            }
        }),
        fetchProducts: builder.query<IProduct[] | undefined, string>({
            query: () => `products.json`,
            transformResponse: (data: {products: IProduct[]}, responses, categoryName) => {
                return data.products.filter(product => product.categoryId === categoryName);
            }
        })
    })
});

export const { useFetchNewsQuery, 
                useFetchCategoriesQuery, 
                useFetchCategoryQuery, 
                useFetchProductsQuery,
            } = appApi;