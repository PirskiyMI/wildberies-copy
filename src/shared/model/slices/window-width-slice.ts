import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
   windowWidth: number | null;
}

const initialState: IState = {
   windowWidth: null,
};

export const windowWidthSlice = createSlice({
   name: 'windowWidth',
   initialState,
   reducers: {
      setWindowWidth: (state, { payload }: PayloadAction<number>) => {
         state.windowWidth = payload;
      },
   },
});

export const windowWidthReducer = windowWidthSlice.reducer;
export const { setWindowWidth } = windowWidthSlice.actions;
