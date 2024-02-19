import { createSelector } from '@reduxjs/toolkit';

export const userNameSelector = (state: RootState) => state.userReducer.name;
export const userIsMaleSelector = (state: RootState) => state.userReducer.isMale;
export const userPhoneSelector = (state: RootState) => state.userReducer.tel;
export const userAvatarSelector = (state: RootState) => state.userReducer.img;

export const userInfoSelector = createSelector(
   [userNameSelector, userIsMaleSelector, userPhoneSelector, userAvatarSelector],
   (name, isMale, phone, avatar) => ({
      name,
      isMale,
      phone,
      avatar,
   }),
);
