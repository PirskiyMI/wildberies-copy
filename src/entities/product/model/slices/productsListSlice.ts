import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

import { fetchAllProducts } from '../../api';

interface IState {
   products: IProduct[];
   isLoading: boolean;
   error: string | null;
}

const initialState: IState = {
   products: [],
   isLoading: false,
   error: null,
};

const productsListSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {
      toggleToFavorite: (state, { payload }: PayloadAction<number>) => {
         state.products.forEach((el) =>
            el.id === payload ? (el.isFavorite = !el.isFavorite) : null,
         );
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.products = payload;
         })
         .addCase(fetchAllProducts.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.error = payload;
         })
         .addDefaultCase(() => {});
   },
});

export const productsListReducer = productsListSlice.reducer;
export const { toggleToFavorite } = productsListSlice.actions;
