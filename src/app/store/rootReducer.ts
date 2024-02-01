import { combineReducers } from '@reduxjs/toolkit';
import { burgerReducer, searchReducer, windowWidthReducer } from 'src/shared';
import {
   productsListOfCategoryReducer,
   productsListReducer,
   visitedProductsListReducer,
} from 'src/entities/product';
import { basketInfoReducer, basketListReducer } from 'src/entities/basket';
import { orderReducer } from 'src/entities/order';
import { userReducer } from 'src/entities/user';

export const rootReducer = combineReducers({
   burgerReducer,
   orderReducer,
   basketInfoReducer,
   basketListReducer,
   productsListReducer,
   productsListOfCategoryReducer,
   visitedProductsListReducer,
   searchReducer,
   userReducer,
   windowWidthReducer,
});
