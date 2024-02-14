import { lazy } from 'react';

export const ProductList = lazy(async () => {
   const { ProductListContainer } = await import('./container');
   return { default: ProductListContainer };
});
