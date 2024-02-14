import { lazy } from 'react';

export const BasketTotalCount = lazy(async () => {
   const { BasketTotalCountContainer } = await import('./container');
   return { default: BasketTotalCountContainer };
});
