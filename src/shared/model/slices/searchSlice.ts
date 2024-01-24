import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
   value: string;
   isOpen: boolean;
}

const initialState: IState = {
   value: '',
   isOpen: false,
};

const searchSlice = createSlice({
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

export const searchReducer = searchSlice.reducer;
export const { setValue: setSearch, toggleIsOpen: toggleSearch } = searchSlice.actions;
