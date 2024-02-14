import { lazy } from 'react';

export const AddProductToCart = lazy(async () => {
   const { AddToCartContainer } = await import('./container');
   return { default: AddToCartContainer };
});
