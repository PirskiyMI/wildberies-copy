import { lazy } from 'react';

export * from './product-card';
export * from './product-card-details';

export const ProductCard = lazy(async () => {
   const { ProductCardUI } = await import('./product-card');
   return { default: ProductCardUI };
});
