import { basketActions } from 'src/entities/basket';
import { IProduct, useAppDispatch } from 'src/shared';

export const useProductActions = (product: IProduct) => {
   const { addProductToBasket, incrementTotalCount } = basketActions;
   const dispatch = useAppDispatch();

   const addProduct = () => {
      dispatch(addProductToBasket(product));
      dispatch(incrementTotalCount());
   };

   return { addProduct };
};
