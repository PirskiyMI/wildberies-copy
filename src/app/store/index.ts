import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { modalSlice, burgerSlice } from '../../shared/model';
import { searchSlice } from '../../shared/model';
import { orderSlice } from '../../entities/order';
import { notificationSlice } from '../../entities/notification';
import { userSlice } from '../../entities/user';
import { basketInfoSlice, basketListSlice, cartSliderSlice } from '../../features/product-actions';
import { productListSlice } from '../../widgets/home';
import { categoryProductListSlice } from '../../widgets/catalog';

const rootReducer = combineReducers({
   burgerReducer: burgerSlice.reducer,
   orderReducer: orderSlice.reducer,
   basketInfoReducer: basketInfoSlice.reducer,
   basketListReducer: basketListSlice.reducer,
   notificationReducer: notificationSlice.reducer,
   productListReducer: productListSlice.reducer,
   catalogListReducer: categoryProductListSlice.reducer,
   cartSliderReducer: cartSliderSlice.reducer,
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
