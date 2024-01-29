import { createSlice } from '@reduxjs/toolkit';

interface IState {
   isVisible: boolean;
}

const initialState: IState = {
   isVisible: false,
};

export const notificationSlice = createSlice({
   name: 'notification',
   initialState,
   reducers: {
      showNotification: (state) => {
         state.isVisible = true;
      },
      hideNotification: (state) => {
         state.isVisible = false;
      },
   },
});

export const notificationReducer = notificationSlice.reducer;
export const { showNotification, hideNotification } = notificationSlice.actions;
