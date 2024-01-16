import { createSlice } from '@reduxjs/toolkit';

interface INotificationSlice {
   isVisible: boolean;
}

const initialState: INotificationSlice = {
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

export const { showNotification, hideNotification } = notificationSlice.actions;
