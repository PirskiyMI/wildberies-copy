import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IOrderSlice {
   price: number;
   count: number;
}

const initialState: IOrderSlice = {
   price: 0,
   count: 0,
};

export const orderSlice = createSlice({
   name: 'order',
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

export const orderReducer = orderSlice.reducer;
export const { incrementCount, setCount, setPrice } = orderSlice.actions;
