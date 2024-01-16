import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProductWithRating } from 'src/shared';

import { fetchAllProducts, fetchProductsByCategory } from './../api';

interface IProductListSlice {
   products: IProductWithRating[];
   isLoading: boolean;
   error: string | null;
}

const initialState: IProductListSlice = {
   products: [],
   isLoading: false,
   error: null,
};

export const productListSlice = createSlice({
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
         .addCase(fetchProductsByCategory.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchProductsByCategory.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.products = payload;
         })
         .addCase(fetchProductsByCategory.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.error = payload;
         })
         .addDefaultCase(() => {});
   },
});

export const { toggleToFavorite } = productListSlice.actions;
