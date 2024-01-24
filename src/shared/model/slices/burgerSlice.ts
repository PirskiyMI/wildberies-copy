import { createSlice } from '@reduxjs/toolkit';

interface IState {
   isOpen: boolean;
}

const initialState: IState = {
   isOpen: false,
};

const burgerSlice = createSlice({
   name: 'burgerMenu',
   initialState,
   reducers: {
      openMenu: (state) => {
         state.isOpen = true;
      },
      closeMenu: (state) => {
         state.isOpen = false;
      },
      toggleMenu: (state) => {
         state.isOpen = !state.isOpen;
      },
   },
});

export const burgerReducer = burgerSlice.reducer;
export const { openMenu, closeMenu, toggleMenu } = burgerSlice.actions;
