import { basketActions } from 'src/entities/basket';
import { IProduct, useAppDispatch } from 'src/shared';

export const useAddToCart = (product: IProduct) => {
   const { addProductToBasket, getTotals } = basketActions;
   const dispatch = useAppDispatch();

   const addProduct = () => {
      dispatch(addProductToBasket(product));
      dispatch(getTotals());
   };

   return { addProduct };
};
