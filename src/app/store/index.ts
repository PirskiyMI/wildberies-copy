import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
   burgerReducer,
   deviceReducer,
   modalReducer,
   notificationReducer,
   searchReducer,
   windowWidthReducer,
} from 'src/shared';
import {
   productsListOfCategoryReducer,
   productsListReducer,
   visitedProductsListReducer,
} from 'src/entities/product';
import { basketInfoReducer, basketListReducer } from 'src/entities/basket';
import { orderReducer } from 'src/entities/order';
import { userReducer } from 'src/entities/user';

const rootReducer = combineReducers({
   burgerReducer,
   orderReducer,
   basketInfoReducer,
   basketListReducer,
   notificationReducer,
   productsListReducer,
   productsListOfCategoryReducer,
   visitedProductsListReducer,
   searchReducer,
   modalReducer,
   userReducer,
   deviceReducer,
   windowWidthReducer,
});

const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
