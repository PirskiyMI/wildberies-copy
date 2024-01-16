import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProductWithRating } from 'src/shared';

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
