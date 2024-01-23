import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProductWithRating } from 'src/shared';

interface ICartSpoilerList {
   list: IProductWithRating[];
}

const initialState: ICartSpoilerList = {
   list: [],
};

export const cartSliderSlice = createSlice({
   name: 'cartSpoiler',
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

export const { addProduct: addProductToVisited } = cartSliderSlice.actions;
