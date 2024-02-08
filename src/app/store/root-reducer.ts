import { combineReducers } from '@reduxjs/toolkit';
import { burgerReducer, searchReducer, windowWidthReducer } from 'src/shared';
import {
   productFavoritesReducer,
   productsListOfCategoryReducer,
   productsListReducer,
   visitedProductsListReducer,
} from 'src/entities/product';
import { userReducer } from 'src/entities/user';
import { basketReducer } from 'src/entities/basket/basket-item';

export const rootReducer = combineReducers({
   burgerReducer,
   basketReducer,
   productsListReducer,
   productFavoritesReducer,
   productsListOfCategoryReducer,
   visitedProductsListReducer,
   searchReducer,
   userReducer,
   windowWidthReducer,
});
