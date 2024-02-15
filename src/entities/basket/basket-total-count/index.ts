import { lazy } from 'react';

export const BasketTotalCount = lazy(async () => {
   const { BasketTotalCount } = await import('./ui');
   return { default: BasketTotalCount };
});
