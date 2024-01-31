import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TState = {
   deviceType: 'mobile' | 'desktop';
};

const initialState: TState = {
   deviceType: 'mobile',
};

export const deviceSlice = createSlice({
   name: 'device',
   initialState,
   reducers: {
      setDeviceType: (state, { payload }: PayloadAction<'mobile' | 'desktop'>) => {
         state.deviceType = payload;
      },
   },
});

export const deviceReducer = deviceSlice.reducer;
export const { setDeviceType } = deviceSlice.actions;
