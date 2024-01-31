import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

export const fetchProductsByCategory = createAsyncThunk<
   IProduct[],
   string,
   { rejectValue: string }
>('fetchProductsByCategory', async (category, { rejectWithValue }) => {
   try {
      const response = await axios
         .get(`https://fakestoreapi.com/products/category/${category}`)
         .then((res) => res.data)
         .then((data) =>
            data.map((el: IProduct) => {
               return { ...el, price: el.price * 100 };
            }),
         );
      return response;
   } catch (error) {
      return rejectWithValue('Не удалось загрузить список товаров');
   }
});
