import { lazy } from 'react';

export const ProductCard = lazy(async () => {
   const { ProductCard } = await import('./product-card');
   return { default: ProductCard };
});
export const ProductCardDetails = lazy(async () => {
   const { ProductCardDetails } = await import('./product-card-details');
   return { default: ProductCardDetails };
});
