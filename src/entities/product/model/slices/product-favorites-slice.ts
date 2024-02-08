import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

interface IState {
   idList: number[];
   favorites: IProduct[];
}

const initialState: IState = {
   idList: [],
   favorites: [],
};

const productFavoritesSlice = createSlice({
   name: 'productFavoritesSlice',
   initialState,
   reducers: {
      toggleProductToFavorites: (state, { payload }: PayloadAction<IProduct>) => {
         const inFavorites = state.idList.find((id) => id === payload.id);
         if (!inFavorites) {
            state.idList.push(payload.id);
            state.favorites.push(payload);
         } else {
            state.idList = state.idList.filter((id) => id !== payload.id);
            state.favorites = state.favorites.filter(({ id }) => id !== payload.id);
         }
      },
   },
});

export const productFavoritesReducer = productFavoritesSlice.reducer;
export const productFavoritesActions = productFavoritesSlice.actions;
