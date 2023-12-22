import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductWithRating } from '../../../shared/lib/types';

export const fetchAllProducts = createAsyncThunk<
   IProductWithRating[],
   undefined,
   { rejectValue: string }
>('fetchAllProducts', async (_, { rejectWithValue }) => {
   try {
      const response = await axios
         .get('https://fakestoreapi.com/products')
         .then((res) => res.data)
         .then((data) =>
            data.map((el: IProductWithRating) => {
               return { ...el, price: el.price * 100, isFavorite: false };
            }),
         );
      return response;
   } catch (error) {
      return rejectWithValue('Не удалось загрузить список товаров');
   }
});

export const fetchProducts = createAsyncThunk<
   IProductWithRating[],
   string,
   { rejectValue: string }
>('fetchProducts', async (category, { rejectWithValue }) => {
   try {
      const response = await axios
         .get(`https://fakestoreapi.com/products/category/${category}`)
         .then((res) => res.data)
         .then((data) =>
            data.map((el: IProductWithRating) => {
               return { ...el, price: el.price * 100 };
            }),
         );
      return response;
   } catch (error) {
      return rejectWithValue('Не удалось загрузить список товаров');
   }
});
