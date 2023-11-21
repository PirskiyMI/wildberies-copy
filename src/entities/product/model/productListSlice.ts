import { createSlice } from '@reduxjs/toolkit';
import { IProductWithRating } from '../../../shared/lib';
import { fetchAllProducts, fetchProducts } from '../api/productsActionCreator';


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
   reducers: {},
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
         .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.products = payload;
         })
         .addCase(fetchProducts.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.error = payload;
         })
         .addDefaultCase(() => {});
   },
});
