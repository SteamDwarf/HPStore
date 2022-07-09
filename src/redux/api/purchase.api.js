import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const purchaseApi = createApi({
    reducerPath: 'purchaseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: builder => ({
        makePurchase: builder.mutation({
            query: (purchaseData) => ({
                url: 'users',
                method: 'POST',
                body: purchaseData
            }),

        })
    })
});

export const {useMakePurchaseMutation} = purchaseApi;