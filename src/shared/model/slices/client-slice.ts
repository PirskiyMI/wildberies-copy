import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IClientSlice {
   type: 'unknown' | 'mobile' | 'desktop';
}

const initialState: IClientSlice = {
   type: 'unknown',
};

const clientSlice = createSlice({
   name: 'client',
   initialState,
   reducers: {
      setClient: (state, { payload }: PayloadAction<'unknown' | 'mobile' | 'desktop'>) => {
         state.type = payload;
      },
   },
});

export const clientReducer = clientSlice.reducer;
export const clientActions = clientSlice.actions;
