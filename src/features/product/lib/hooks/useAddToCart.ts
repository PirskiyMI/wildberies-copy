import { addProduct, incrementTotalCount } from 'src/entities/basket';
import { IProduct, useAppDispatch } from 'src/shared';

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
   };
   return { addToCart };
};
