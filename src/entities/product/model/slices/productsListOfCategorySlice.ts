import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

import { fetchProductsByCategory } from '../../api';

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

const productsListOfCategorySlice = createSlice({
   name: 'productsListOfCategory',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProductsByCategory.pending, (state) => {
            state.products = [];
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchProductsByCategory.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.products = payload;
         })
         .addCase(fetchProductsByCategory.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) {
               state.error = payload;
            }
         });
   },
});

export const productsListOfCategoryReducer = productsListOfCategorySlice.reducer;
