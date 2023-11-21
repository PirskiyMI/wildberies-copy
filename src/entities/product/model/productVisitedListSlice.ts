import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductWithRating } from '../../../shared/lib';

interface IProductVisitedList {
   list: IProductWithRating[];
}

const initialState: IProductVisitedList = {
   list: [],
};

export const productVisitedListSlice = createSlice({
   name: 'productVisitedList',
   initialState,
   reducers: {
      addProduct: (state, { payload }: PayloadAction<IProductWithRating>) => {
         const inList = state.list.findIndex((el) => el.id === payload.id) !== -1;
         if (!inList) {
            state.list.push(payload);
         }
      },
   },
});

export const { addProduct: addProductToVisited } = productVisitedListSlice.actions;
