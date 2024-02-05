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
      toggleProductToFavorites: (state, { payload }: PayloadAction<IProduct>) => {
         const inFavorites = state.favorites.find((el) => el.id === payload.id);
         if (!inFavorites) {
            state.favorites.push(payload);
         } else {
            state.favorites = state.favorites.filter(({ id }) => id !== payload.id);
         }
      },
   },
});

export const productFavoritesReducer = productFavoritesSlice.reducer;
export const productFavoritesActions = productFavoritesSlice.actions;
