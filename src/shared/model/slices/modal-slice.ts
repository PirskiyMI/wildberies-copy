import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../lib';

export interface IState {
   isModalOpen: boolean;
   product?: IProduct | null;
}

const initialState: IState = {
   isModalOpen: false,
   product: null,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state) => {
         state.isModalOpen = true;
      },
      closeModal: (state) => {
         state.isModalOpen = false;
      },
      setProductToModal: (state, action: PayloadAction<IProduct | null>) => {
         state.product = action.payload;
      },
   },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal, setProductToModal } = modalSlice.actions;
