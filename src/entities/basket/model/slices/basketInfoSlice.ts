import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISlice {
   count: number;
   price: number;
}

const initialState: ISlice = {
   count: 0,
   price: 0,
};

export const basketInfoSlice = createSlice({
   name: 'basketInfo',
   initialState,
   reducers: {
      incrementCount: (state) => {
         state.count += 1;
      },
      setCount: (state, { payload }: PayloadAction<number>) => {
         state.count = payload;
      },
      setPrice: (state, { payload }: PayloadAction<number>) => {
         state.price = payload;
      },
   },
});

export const {
   incrementCount: incrementTotalCount,
   setCount: setTotalCount,
   setPrice: setTotalPrice,
} = basketInfoSlice.actions;
