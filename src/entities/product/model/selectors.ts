import { createSelector } from '@reduxjs/toolkit';

export const productsListSelector = (state: RootState) => state.productsListReducer;
export const productsListOfCategorySelector = (state: RootState) =>
   state.productsListOfCategoryReducer;
export const productFavoritesSelector = (state: RootState) =>
   state.productFavoritesReducer.favorites;
export const favoritesIdSelector = (state: RootState) => state.productFavoritesReducer.idList;

export const inFavoritesSelector = createSelector(
   [favoritesIdSelector, (_favoritesIdSelector, id: number) => id],
   (list, id) => {
      return Boolean(list.find((el) => el === id));
   },
);
