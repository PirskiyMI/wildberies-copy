import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductWithStatus } from '../../../../shared/lib';

export interface IState {
   list: IProductWithStatus[];
}

const initialState: IState = {
   list: [],
};

export const basketListSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProduct: (state, action: PayloadAction<IProductWithStatus>) => {
         state.list.push(action.payload);
      },
      deleteProduct: (state, action: PayloadAction<number>) => {
         state.list = state.list.filter((el) => el.id !== action.payload);
      },
      incrementProductCount: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status.count += 1;
            }
         });
      },
      decrementProductCount: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status.count -= 1;
            }
         });
      },
      setProductCount: (state, action: PayloadAction<{ id: number; value: number }>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload.id) {
               el.status.count = action.payload.value;
            }
         });
      },
      toggleProductIsChecked: (state, action: PayloadAction<number>) => {
         state.list.forEach((el) => {
            if (el.id === action.payload) {
               el.status.isChecked = !el.status.isChecked;
            }
         });
      },
   },
});

export const {
   toggleProductIsChecked,
   incrementProductCount,
   decrementProductCount,
   setProductCount,
   addProduct,
   deleteProduct,
} = basketListSlice.actions;
