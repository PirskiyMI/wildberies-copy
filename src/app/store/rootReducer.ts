import { combineReducers } from '@reduxjs/toolkit';
import { burgerReducer, searchReducer, windowWidthReducer } from 'src/shared';
import {
   productFavoritesReducer,
   productsListOfCategoryReducer,
   productsListReducer,
   visitedProductsListReducer,
} from 'src/entities/product';
import { orderReducer } from 'src/entities/order';
import { userReducer } from 'src/entities/user';
import { basketReducer } from 'src/entities/basket';

export const rootReducer = combineReducers({
   burgerReducer,
   basketReducer,
   orderReducer,
   productsListReducer,
   productFavoritesReducer,
   productsListOfCategoryReducer,
   visitedProductsListReducer,
   searchReducer,
   userReducer,
   windowWidthReducer,
});
