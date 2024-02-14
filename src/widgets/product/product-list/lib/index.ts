import { lazy } from 'react';

export const ProductListContainer = lazy(async () => {
   const { ProductListContainer } = await import('./container');
   return { default: ProductListContainer };
});
