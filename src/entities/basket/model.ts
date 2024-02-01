import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from 'src/shared';

export interface IState {
   totalCount: number;
   totalPrice: number;
   list: IProduct[];
}

const initialState: IState = {
   totalCount: 0,
   totalPrice: 0,
   list: [
      {
         id: 1,
         image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
         price: 10995,
         title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
         isFavorite: false,
         rating: {
            rate: 0,
            count: 0,
         },
         status: {
            count: 1,
            isChecked: false,
         },
      },
   ],
};

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      addProductToBasket: (state, { payload }: PayloadAction<IProduct>) => {
         const inBasket = state.list.find(({ id }) => id === payload.id);
         if (!inBasket)
            state.list.push({
               ...payload,
               status: {
                  count: 1,
                  isChecked: false,
               },
            });
      },
      deleteProductFromBasket: (state, action: PayloadAction<number>) => {
         state.list = state.list.filter((el) => el.id !== action.payload);
      },
      incrementProductCount: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status!.count += 1;
            }
         });
      },
      decrementProductCount: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status!.count -= 1;
            }
         });
      },
      setProductCount: (state, action: PayloadAction<{ id: number; value: number }>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload.id) {
               el.status!.count = action.payload.value;
            }
         });
      },
      toggleProductIsChecked: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status!.isChecked = !el.status!.isChecked;
            }
         });
      },
      incrementTotalCount: (state) => {
         state.totalCount += 1;
      },
      setTotalCount: (state, { payload }: PayloadAction<number>) => {
         state.totalCount = payload;
      },
      setTotalPrice: (state, { payload }: PayloadAction<number>) => {
         state.totalPrice = payload;
      },
   },
});

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;
