import { createSelector } from '@reduxjs/toolkit';

export const userDiscountSelector = (state: RootState) => state.userReducer.discount;
export const userAmountSelector = (state: RootState) => state.userReducer.ransomAmount;
export const userRedemptionSelector = (state: RootState) => state.userReducer.redemptionPercentage;
export const userMetricsSelector = createSelector(
   [userDiscountSelector, userAmountSelector, userRedemptionSelector],
   (discount, ransomAmount, redemptionPercentage) => ({
      discount,
      ransomAmount,
      redemptionPercentage,
   }),
);
