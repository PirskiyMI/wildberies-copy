import { IProduct, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';
import { useCallback } from 'react';

export const useAddToCart = (product: IProduct) => {
   const { addProductToBasket } = basketActions;
   const dispatch = useAppDispatch();

   const addProduct = useCallback(() => {
      dispatch(addProductToBasket(product));
   }, [product, addProductToBasket, dispatch]);

   return addProduct;
};
