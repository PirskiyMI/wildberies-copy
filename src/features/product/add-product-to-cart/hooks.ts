import { IProduct, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

export const useAddToCart = (product: IProduct) => {
   const { addProductToBasket } = basketActions;
   const dispatch = useAppDispatch();

   const addProduct = () => {
      dispatch(addProductToBasket(product));
   };

   return { addProduct };
};
