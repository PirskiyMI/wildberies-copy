import { FC, lazy, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import { IAddProductToCartContainerProps } from '../types';

export const AddProductToCart = lazy(async () => {
   const { AddProductToCart } = await import('./add-product-to-cart');
   return { default: AddProductToCart };
});
export const AddProductToCartInModal = lazy(async () => {
   const { AddProductToCartInModal } = await import('./add-product-to-cart-in-modal');
   return { default: AddProductToCartInModal };
});

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
