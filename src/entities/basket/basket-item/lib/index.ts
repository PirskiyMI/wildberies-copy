import { lazy } from 'react';

export const BasketItem = lazy(async () => {
   const { BasketItem } = await import('./containers');
   return { default: BasketItem };
});
