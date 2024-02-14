import { lazy } from 'react';

export const ProductCounter = lazy(async () => {
   const { ProductCounter } = await import('./ui');
   return { default: ProductCounter };
});
