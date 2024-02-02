import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

interface IState {
   favorites: IProduct[];
}

const initialState: IState = {
   favorites: [],
};

const productFavoritesSlice = createSlice({
   name: 'productFavoritesSlice',
   initialState,
   reducers: {
      addProductToFavorites: (state, { payload }: PayloadAction<IProduct>) => {
         const inFavorites = state.favorites.find((el) => el === payload);
         if (!inFavorites) {
            state.favorites.push(payload);
         }
      },
      removeProductFromFavorites: (state, { payload }: PayloadAction<number>) => {
         state.favorites = state.favorites.filter(({ id }) => id !== payload);
      },
   },
});

export const productFavoritesReducer = productFavoritesSlice.reducer;
export const productFavoritesActions = productFavoritesSlice.actions;
