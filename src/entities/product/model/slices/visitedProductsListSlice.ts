import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProductWithRating } from 'src/shared';

interface IState {
   list: IProductWithRating[];
}

const initialState: IState = {
   list: [],
};

const visitedProductsListSlice = createSlice({
   name: 'visitedProductsList',
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

export const visitedProductsListReducer = visitedProductsListSlice.reducer;
export const { addProduct: addProductToVisited } = visitedProductsListSlice.actions;
