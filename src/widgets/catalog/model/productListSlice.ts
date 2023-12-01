import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoryProducts } from '../api/productsActionCreator';
import { IProductWithRating } from '../../../shared/lib';

interface IState {
   list: IProductWithRating[];
   isLoading: boolean;
   error: string | null;
}

const initialState: IState = {
   list: [],
   isLoading: false,
   error: null,
};

export const categoryProductListSlice = createSlice({
   name: 'categoryProductList',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCategoryProducts.pending, (state) => {
            state.list = [];
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchCategoryProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.list = payload;
         })
         .addCase(fetchCategoryProducts.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) {
               state.error = payload;
            }
         });
   },
});
