import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
   windowWidth: number;
}

const initialState: IState = {
   windowWidth: 0,
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
