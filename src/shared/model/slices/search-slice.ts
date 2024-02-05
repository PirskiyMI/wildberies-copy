import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
   value: string;
}

const initialState: IState = {
   value: '',
};

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setValue: (state, { payload }: PayloadAction<string>) => {
         state.value = payload;
      },
   },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
