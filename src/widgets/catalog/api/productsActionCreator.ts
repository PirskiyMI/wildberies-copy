import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductWithRating } from '../../../shared/lib';

export const fetchCategoryProducts = createAsyncThunk<
   IProductWithRating[],
   string,
   { rejectValue: string }
>('fetchCategoryProducts', async (category, { rejectWithValue }) => {
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
