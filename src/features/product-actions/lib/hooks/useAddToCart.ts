import { hideNotification, showNotification } from '../../../../entities/notification';
import { IProduct, useAppDispatch } from '../../../../shared/lib';
import { incrementTotalCount } from '../../model/slices/basketInfoSlice';
import { addProduct } from '../../model/slices/basketListSlice';

export const useAddToCart = (product: IProduct) => {
   const dispatch = useAppDispatch();
   const addToCart = () => {
      dispatch(
         addProduct({
            ...product,
            status: {
               count: 1,
               isChecked: false,
            },
         }),
      );
      dispatch(incrementTotalCount());
      dispatch(showNotification());
      setTimeout(() => {
         dispatch(hideNotification());
      }, 3000);
   };
   return { addToCart };
};
