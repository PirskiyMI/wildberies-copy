import { createSlice } from '@reduxjs/toolkit';

export interface IBurgerMenu {
   isOpen: boolean;
}

const initialState: IBurgerMenu = {
   isOpen: false,
};

export const burgerSlice = createSlice({
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

export const { openMenu, closeMenu, toggleMenu } = burgerSlice.actions;
