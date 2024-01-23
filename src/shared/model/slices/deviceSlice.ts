import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Device = {
   type: 'mobile' | 'desktop';
};

const initialState: Device = {
   type: 'mobile',
};

export const deviceSlice = createSlice({
   name: 'device',
   initialState,
   reducers: {
      setDeviceType: (state, { payload }: PayloadAction<'mobile' | 'desktop'>) => {
         state.type = payload;
      },
   },
});

export const deviceReducer = deviceSlice.reducer;
export const { setDeviceType } = deviceSlice.actions;
