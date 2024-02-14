import { lazy } from 'react';

export const AddProductToCart = lazy(async () => {
   const { AddProductToCart } = await import('./add-product-to-cart');
   return { default: AddProductToCart };
});
export const AddProductToCartInModal = lazy(async () => {
   const { AddProductToCartInModal } = await import('./add-product-to-cart-in-modal');
   return { default: AddProductToCartInModal };
});
