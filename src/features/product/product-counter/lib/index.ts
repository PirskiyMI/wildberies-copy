import { lazy } from 'react';

export const ProductCounter = lazy(async () => {
   const { ProductCounterContainer } = await import('./container');
   return { default: ProductCounterContainer };
});
