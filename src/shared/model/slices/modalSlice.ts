import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductWithRating } from '../../lib';

export interface IModalState {
   isModalOpen: boolean;
   product?: IProductWithRating | null;
}

const initialState: IModalState = {
   isModalOpen: false,
   product: null,
};

export const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state) => {
         state.isModalOpen = true;
      },
      closeModal: (state) => {
         state.isModalOpen = false;
      },
      setProductToModal: (state, action: PayloadAction<IProductWithRating | null>) => {
         state.product = action.payload;
      },
   },
});

export const { openModal, closeModal, setProductToModal } = modalSlice.actions;
