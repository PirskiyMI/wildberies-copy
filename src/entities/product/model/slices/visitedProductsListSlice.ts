import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

interface IState {
   list: IProduct[];
}

const initialState: IState = {
   list: [],
};

const visitedProductsListSlice = createSlice({
   name: 'visitedProductsList',
   initialState,
   reducers: {
      addProduct: (state, { payload }: PayloadAction<IProduct>) => {
         const inList = state.list.findIndex((el) => el.id === payload.id) !== -1;
         if (!inList) {
            state.list.push(payload);
         }
      },
   },
});

export const visitedProductsListReducer = visitedProductsListSlice.reducer;
export const { addProduct: addProductToVisited } = visitedProductsListSlice.actions;
