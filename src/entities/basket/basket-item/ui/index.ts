import { lazy } from 'react';

export const BasketItem = lazy(async () => {
   const { BasketItem } = await import('./container');
   return { default: BasketItem };
});
