import { createSelector } from '@reduxjs/toolkit';

export const userSelector = (state: RootState) => state.userReducer;
export const userDiscountSelector = (state: RootState) => state.userReducer.discount;
export const userNameSelector = (state: RootState) => state.userReducer.name;
export const userMainInfoSelector = createSelector([userSelector], (user) => {
   const { name, tel, isMale, img } = user;
   return { name, isMale, tel, avatar: img };
});
