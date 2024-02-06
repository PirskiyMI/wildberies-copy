import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'src/shared';

interface IBasketTotals {
   totalCount: number;
   totalPrice: number;
}

const initialState: IBasketTotals = {
   totalCount: 0,
   totalPrice: 0,
};

const basketTotalsSlice = createSlice({
   name: 'basketTotal',
   initialState,
   reducers: {
      getTotals: (state, { payload }: PayloadAction<IProduct[]>) => {
         const { count, price } = payload.reduce(
            (totals, list) => {
               const price = list.price;
               const { count } = list.status!;

               totals.count += count;
               totals.price += price;

               return totals;
            },
            { count: 0, price: 0 },
         );

         state.totalCount = count;
         state.totalPrice = price;
      },
   },
});

export const basketTotalsReducer = basketTotalsSlice.reducer;
export const basketTotalsActions = basketTotalsSlice.actions;
