import { lazy } from 'react';

export const ProductList = lazy(async () => {
   const { ProductList } = await import('./product-list');
   return { default: ProductList };
});
export const ProductListIsEmpty = lazy(async () => {
   const { ListIsEmpty } = await import('./list-is-empty');
   return { default: ListIsEmpty };
});
