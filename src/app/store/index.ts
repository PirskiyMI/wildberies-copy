import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { modalSlice, burgerSlice } from '../../shared/model';
import { searchSlice } from '../../shared/model';
import { orderSlice } from '../../entities/order';
import { notificationSlice } from '../../entities/notification';
import { userSlice } from '../../entities/user';
import { productListSlice } from '../../widgets/home';
import { categoryProductListSlice } from '../../widgets/catalog';
import { windowWidthSlice } from '../../pages/Layout';
import { basketInfoSlice, basketListSlice } from 'src/entities/basket';
import { cartSliderSlice } from 'src/entities/product';

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
   windowWidthReducer: windowWidthSlice.reducer,
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
