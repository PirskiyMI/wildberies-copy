import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'src/shared';

interface IOrderSlice {
   price: number;
   count: number;
}

const initialState: IOrderSlice = {
   price: 0,
   count: 0,
   
};

export const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {
      getTotals: (state, { payload }: PayloadAction<IProduct[]>) => {
         const listOfSelected = payload.filter(({ status }) => status?.isChecked);

         const { count, price } = listOfSelected.reduce(
            (orderTotals, orderProducts) => {
               const { price, status } = orderProducts;
               const totalPrice = price * status!.count;
               const totalCount = status!.count;

               orderTotals.price += totalPrice;
               orderTotals.count += totalCount;

               return orderTotals;
            },
            { count: 0, price: 0 },
         );

         (state.price = price), (state.count = count);
      },
   },
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
