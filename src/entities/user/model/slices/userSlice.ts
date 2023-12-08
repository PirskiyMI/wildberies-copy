import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
   name: string;
   tel: string;
   balance: number;
   discount: number;
   purchases: [];
   favorites: {
      brands: [];
      products: [];
   };
}

const initialState: IUserSlice = {
   name: 'Максим',
   discount: 27,
   balance: 0,
   tel: '79530930145',
   purchases: [],
   favorites: {
      brands: [],
      products: [],
   },
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});
