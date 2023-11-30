import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { modalSlice, burgerSlice } from '../../shared/model';
import { orderSlice } from '../../entities/order';
import { basketInfoSlice, basketListSlice } from '../../entities/basket';
import { notificationSlice } from '../../entities/notification';
import { searchSlice } from '../../entities/search-field';
import { productListSlice } from '../../entities/product';
import { productVisitedListSlice } from './../../entities/product/model/productVisitedListSlice';
import { userSlice } from '../../entities/user';

const rootReducer = combineReducers({
   burgerReducer: burgerSlice.reducer,
   orderReducer: orderSlice.reducer,
   basketInfoReducer: basketInfoSlice.reducer,
   basketListReducer: basketListSlice.reducer,
   notificationReducer: notificationSlice.reducer,
   productListReducer: productListSlice.reducer,
   productVisitedListSlice: productVisitedListSlice.reducer,
   searchReducer: searchSlice.reducer,
   modalReducer: modalSlice.reducer,
   userReducer: userSlice.reducer,
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
