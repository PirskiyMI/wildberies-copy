import { lazy } from 'react';

export const TotalOrderCount = lazy(async () => {
   const { TotalOrderCount } = await import('./total-order-count');
   return { default: TotalOrderCount };
});
export const TotalOrderPrice = lazy(async () => {
   const { TotalOrderPrice } = await import('./total-order-price');
   return { default: TotalOrderPrice };
});
