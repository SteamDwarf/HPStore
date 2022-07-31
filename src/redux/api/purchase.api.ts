import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICartProduct } from "../cart/cart.slice";

export interface IPurchasesData {
    userId: number;
    purchases: ICartProduct[]
}

export const purchaseApi = createApi({
    reducerPath: 'purchaseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: builder => ({
        makePurchase: builder.mutation<void, IPurchasesData>({
            query: (purchaseData) => ({
                url: 'users',
                method: 'POST',
                body: purchaseData
            }),

        })
    })
});

export const {useMakePurchaseMutation} = purchaseApi;