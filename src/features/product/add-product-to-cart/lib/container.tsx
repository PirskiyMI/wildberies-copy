import { FC, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import { IAddProductToCartContainerProps } from './types';
import { AddProductToCart, AddProductToCartInModal } from '../ui';

export const AddToCartContainer: FC<IAddProductToCartContainerProps> = ({
   product,
   inBasket,
   UIType,
}) => {
   const { addProductToBasket } = basketActions;
   const dispatch = useAppDispatch();

   const addProduct = useCallback(() => {
      dispatch(addProductToBasket(product));
   }, [product, addProductToBasket, dispatch]);

   return (
      <>
         {UIType === 'main' ? (
            <AddProductToCart inBasket={inBasket} clickHandler={addProduct} />
         ) : (
            <AddProductToCartInModal inBasket={inBasket} clickHandler={addProduct} />
         )}
      </>
   );
};
