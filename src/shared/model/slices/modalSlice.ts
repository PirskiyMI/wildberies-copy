import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductWithRating } from '../../lib';

export interface IState {
   isModalOpen: boolean;
   product?: IProductWithRating | null;
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
      setProductToModal: (state, action: PayloadAction<IProductWithRating | null>) => {
         state.product = action.payload;
      },
   },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal, setProductToModal } = modalSlice.actions;
