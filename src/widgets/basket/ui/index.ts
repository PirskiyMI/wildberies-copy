import { lazy } from 'react';

export const DesktopBasket = lazy(async () => {
   const { BasketContainer } = await import('./desktop');
   return { default: BasketContainer };
});
export const MobileBasket = lazy(async () => {
   const { BasketContainer } = await import('./mobile');
   return { default: BasketContainer };
});
