import { lazy } from 'react';

export const AddProductToCart = lazy(async () => {
   const { AddToCartContainer } = await import('../ui/container');
   return { default: AddToCartContainer };
});
