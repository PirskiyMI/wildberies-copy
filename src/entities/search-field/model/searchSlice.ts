import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchSlice {
   value: string;
   isOpen: boolean;
}

const initialState: ISearchSlice = {
   value: '',
   isOpen: false,
};

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setValue: (state, { payload }: PayloadAction<string>) => {
         state.value = payload;
      },
      toggleIsOpen: (state) => {
         state.isOpen = !state.isOpen;
      },
   },
});

export const { setValue: setSearch, toggleIsOpen: toggleSearch } = searchSlice.actions;
