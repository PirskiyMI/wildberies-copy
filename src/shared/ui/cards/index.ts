import { lazy } from 'react';

export * from './cart-item-card';

export const Card = lazy(async () => {
   const { Card } = await import('./card');
   return { default: Card };
});
/* export const CartItemCard = lazy(async () => {
   const { CartItemCard } = await import('./cart-item-card');
   return { default: CartItemCard };
}); */
export const ProductItemCard = lazy(async () => {
   const { ProductItemCard } = await import('./product-item-card');
   return { default: ProductItemCard };
});
